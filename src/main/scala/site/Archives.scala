package site

import scalatags.Text
import templates.SidebarPage

object Archives extends SidebarPage {
  override def pageTitle: String = "Archives"

  override def pageBody: Text.all.Frag =
    """
      |Here you can find all my previous posts:
    """.stripMargin.md
}
