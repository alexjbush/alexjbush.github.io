import com.typesafe.sbt.web.Import.WebKeys
import Dependencies._
import sbtcrossproject.CrossPlugin.autoImport.{crossProject, CrossType}

ThisBuild / scalaVersion := "2.12.8"

lazy val euler = project
  .enablePlugins(ScalaJSPlugin)
  .settings(
    libraryDependencies ++= Seq(scalaTest)
  )

//lazy val euler = crossProject(JSPlatform, JVMPlatform)
//  .crossType(CrossType.Full)
//  .enablePlugins(ScalaJSPlugin)
//lazy val eulerJVM = euler.jvm
//lazy val eulerJS = euler.js.enablePlugins(ScalaJSPlugin)

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
  .aggregate(euler)
  .dependsOn(euler)
  .enablePlugins(HepekPlugin, SbtWeb)

