package site

import scalatags.Text
import templates.SidebarPage

object Projects extends SidebarPage {
  override def pageTitle: String = "Projects"

  override def pageBody: Text.all.Frag =
    s"""
      |Projects:
      |${Euler.ref}
    """.stripMargin.md
}
