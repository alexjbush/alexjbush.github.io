package site

import scalatags.Text.all._
import templates.SidebarPage


object About extends SidebarPage {
  override def pageTitle: String = "About"

  override def pageBody: Frag =
    """
      |...
    """
      .stripMargin.md
}
