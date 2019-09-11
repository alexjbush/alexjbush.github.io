package site

import java.util.ServiceLoader

import scalatags.Text
import sh.alexbu.euler.classes.EulerProblem
import templates.SidebarPage
import scala.collection.JavaConverters._

import scala.reflect.{ClassTag, _}

object Euler extends SidebarPage {
  override def pageTitle: String = "Project Euler"

  override def pageBody: Text.all.Frag = {
    ServiceLoader.load(classOf[EulerProblem]).asScala.map(_.title).mkString("\n").md
  }
}
