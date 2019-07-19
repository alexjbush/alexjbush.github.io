import com.typesafe.sbt.web.Import.WebKeys
import Dependencies._

ThisBuild / scalaVersion := "2.12.8"

lazy val root = (project in file("."))
  .settings(
    organization := "sh.alexbu",
    name := "home",
    version := "0.0.1",
    libraryDependencies ++= Seq(scalaTest, hepekLib),
    resolvers += Resolver.sonatypeRepo("snapshots"),
    (hepek in Compile) := {
      WebKeys.assets.value // run 'assets' after compiling...
      (hepek in Compile).value
    },
    WebKeys.webModulesLib := "site/lib"
  )
  .enablePlugins(HepekPlugin, SbtWeb)

