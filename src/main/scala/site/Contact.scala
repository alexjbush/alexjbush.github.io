package site

import scalatags.Text
import templates.SidebarPage

object Contact extends SidebarPage {
  override def pageTitle: String = "Contact"

  override def pageBody: Text.all.Frag =
    """
      |You can find me on Github ([https://github.com/alexjbush](https://github.com/alexjbush)) or e-mail (<binary-obscured data-before="alex.john.bush" data-after="gmail.com">@</binary-obscured>).
    """.stripMargin.md
}
