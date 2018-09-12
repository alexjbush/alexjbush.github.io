--------------------------------------------------------------------------------
{-# LANGUAGE OverloadedStrings #-}
import           Hakyll.Web.Sass (sassCompiler)
import Data.Monoid (mappend, (<>))
import Hakyll
import Data.List (intercalate)
import Data.List.Split (splitOn)
import Data.Yaml (Object, Value(..))
import Data.String (fromString) 
import qualified Data.HashMap.Strict as Map
import qualified Data.Vector as Vector
import Data.Maybe (fromJust, fromMaybe)
import Data.Text (unpack, pack)
import Control.Applicative (empty)
import Data.List.Split
import Control.Monad (filterM)
import Data.Default (def)

--------------------------------------------------------------------------------
main :: IO ()
main = hakyll $ do
    match "images/*" $ do
        route   idRoute
        compile copyFileCompiler

    match "css/*.css" $ do
        route   idRoute
        compile compressCssCompiler

    match "css/*.s*ss" $ do
        route $ setExtension "css"
        let compressCssItem = fmap compressCss
        compile (compressCssItem <$> sassCompiler)

    match (fromList ["about.rst", "contact.markdown"]) $ do
        route   $ setExtension "html"
        compile $ pandocCompiler
            >>= loadAndApplyTemplate "templates/withsidebar.html" routesContext
            >>= loadAndApplyTemplate "templates/default.html" defaultContext
            >>= relativizeUrls

    match "resume.markdown" $ do
        route   $ setExtension "html"
        let resumeRoutesContext =
              constField "title" "Resume"                `mappend`
              routesContext
        compile $ pandocCompiler
            >>= loadAndApplyTemplate "templates/resume.html" novaCtx
            >>= loadAndApplyTemplate "templates/fullwidth.html" resumeRoutesContext
            >>= loadAndApplyTemplate "templates/default.html" resumeRoutesContext
            >>= relativizeUrls

    match "posts/*" $ do
        route $ setExtension "html"
        compile $ pandocCompiler
            >>= loadAndApplyTemplate "templates/post.html"    postCtx
            >>= loadAndApplyTemplate "templates/withsidebar.html" routesContext
            >>= loadAndApplyTemplate "templates/default.html" postCtx
            >>= relativizeUrls

    create ["archive.html"] $ do
        route idRoute
        compile $ do
            posts <- recentFirst =<< loadAll "posts/*"
            let archiveCtx =
                    listField "posts" postCtx (return posts) `mappend`
                    constField "title" "Archives"            `mappend`
                    routesContext

            makeItem ""
                >>= loadAndApplyTemplate "templates/archive.html" archiveCtx
                >>= loadAndApplyTemplate "templates/withsidebar.html" archiveCtx
                >>= loadAndApplyTemplate "templates/default.html" archiveCtx
                >>= relativizeUrls


    match "index.html" $ do
        route idRoute
        compile $ do
            posts <- recentFirst =<< loadAll "posts/*"
            let indexCtx =
                    listField "posts" postCtx (return posts) `mappend`
                    constField "title" "Home"                `mappend`
                    defaultContext

            getResourceBody
                >>= applyAsTemplate indexCtx
                >>= loadAndApplyTemplate "templates/withsidebar.html" routesContext
                >>= loadAndApplyTemplate "templates/default.html" indexCtx
                >>= relativizeUrls

    match "templates/*" $ compile templateBodyCompiler

--------------------------------------------------------------------------------
postCtx :: Context String
postCtx =
    dateField "date" "%B %e, %Y" `mappend`
    defaultContext

{-https://groups.google.com/forum/#!topic/hakyll/gpSIeTxRHpo -}
myRoutes :: [Item (String, String)] 
myRoutes = 
        [ mk "Home" "/",
          mk "About" "/about.html",
          mk "Contact" "/contact.html",
          mk "Resume" "/resume.html",
          mk "Archives" "/archive.html"
        ] 
      where 
        mk name path = Item (fromString name) (name, path)

routeCtx :: Context (String, String)
routeCtx = mconcat 
        [ field "name" $ return . fst . itemBody 
        , field "path"  $ return . snd . itemBody 
        ]

routesContext :: Context String
routesContext =
           listField "routes" routeCtx (return myRoutes) `mappend`
            defaultContext 

{-https://github.com/hashanp/hashanp.xyz/blob/master/site.hs-}
novaCtx = Context f  <> urlField "url" <> bodyField "body"
  where f k p item = do
          let t = (getUnderlying >>= getMetadata >>= makeItem) :: Compiler (Item Object)
          t >>= (unContext novaCtx' k p)

novaCtx' :: Context Object
novaCtx' = Context $ \key _ item -> f (splitOn "." key) (itemBody item)
  where f :: [String] -> Object -> Compiler ContextField
        f [x] item
            = if p == Nothing then empty
              else case q of (String t) -> return $ StringField (unpack t)
                             (Array a) -> do
                                            l <- mapM (makeItem . v) (Vector.toList a)
                                            return $ ListField novaCtx' l
                             _ -> empty
          where p = Map.lookup (pack x) (item)
                q = fromJust p
                v (Object o) = o
                v x = Map.fromList [("value", x)]
        f (x:xs) item =
          if p == Nothing then empty
          else f xs (v $ fromJust p)
          where p = Map.lookup (pack x) (item)
                v (Object o) = o
                v _ = error "Expected object"
