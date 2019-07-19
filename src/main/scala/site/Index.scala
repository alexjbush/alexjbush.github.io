package site

import scalatags.Text.all._
import scalatags.Text
import templates.SidebarPage

object Index extends SidebarPage {
  override def pageTitle: String = "Home"

  override def pageBody: Text.all.Frag = p("Welcome to my homepage!")
}
