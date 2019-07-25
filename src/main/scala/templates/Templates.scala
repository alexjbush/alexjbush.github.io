package templates

import ba.sake.hepek.Resources
import ba.sake.hepek.html.PageSettings
import ba.sake.hepek.html.component.BasicComponents
import ba.sake.hepek.html.statik.{StaticPage, StaticSiteSettings}
import scalatags.Text.all._
import scalatags.Text.tags2.{main, nav, section}
import site._


trait BasePage extends StaticPage with Resources with BasicComponents {

  val topPages: List[BasePage] = List(Index, About, Contact, Resume, Archives)

  override def staticSiteSettings: StaticSiteSettings =
    super.staticSiteSettings
      .withIndexPage(Index)
      .withMainPages(topPages)

  override def styleURLs: List[String] = super.styleURLs ++ List(
    relTo(styles.css("skeleton")),
    relTo(styles.css("normalize")),
    relTo(styles.css("custom")),
    "https://fonts.googleapis.com/css?family=Lato:400,900&amp;subset=latin-ext",
    "https://use.fontawesome.com/releases/v5.6.3/css/brands.css",
    "https://use.fontawesome.com/releases/v5.6.3/css/fontawesome.css"
  )

  override def pageSettings: PageSettings = super.pageSettings.withTitle(pageTitle)

  def pageTitle: String

  def pageBody: Frag

}

trait SidebarPage extends BasePage {

  override def pageContent: Frag = frag(
    div(`class` := "container")(
      div(`class` := "row")(
        section(`class` := "three columns")(
          nav(id := "sidebar")(
            div(`class` := "logo")(
              h5(a(href := Index.ref, `class` := "title-link")("AlexBu.sh"))
            ),
            div(id := "unstyled")(
              ul(
                topPages.map(
                  p =>
                    li(a(`class` := "nav-link", href := p.ref)(p.pageTitle))
                ): _*
              )
            )
          ),
          raw("&nbsp;")
        ),
        section(`class` := "nine columns")(
          main(role := "main")(
            h1(pageTitle),
            pageBody
          )
        )
      )
    )
  )

}

trait FullWidthPage extends BasePage {

  override def pageContent: Frag = frag(
    div(`class` := "container", id := "nav")(
      div(`class` := "row")(
        nav(
          div(`class` := "five columns")(
            div(`class` := "logo")(
              h2(pageTitle)
            )
          ),
          div(`class` := "seven columns")(
            topPages.map(
              p =>
                List[scalatags.text.Frag](a(`class` := "nav-link", href := p.ref)(p.pageTitle))
            ).reduceLeft((l, r) => l ++ List(raw("&nbsp;")) ++ r): _*
          )
        )
      )
    ),
    pageBody
  )

}