package site

import scalatags.Text
import templates.FullWidthPage
import scalatags.Text.all._
import scalatags.Text.tags2.{main, nav, section, article}

object Resume extends FullWidthPage {

  override def pageTitle: String = "Resume"

  val contactInfo: ContactInfo = ContactInfo(
    "alex.john.bush",
    "gmail.com",
    "+44",
    "7725576052",
    "https://alexbu.sh",
    "https://www.linkedin.com/in/alex-j-bush/",
    "https://github.com/alexjbush"
  )

  override def pageBody: Text.all.Frag = frag(
    article(
      div(`class` := "container nobreak")(
        div(`class` := "row")(
          header(
            a(href := "cv.pdf")("A PDF version is available here.")
          ),
          h1("Alex John Bush")
        ),
        hr,
        section(
          div(`class` := "row")(
            div(`class` := "twelve columns")(
              p(`class` := "upper")(
                raw("Contact Informa&shy;tion")
              )
            )
          ),
          div(`class` := "row")(contactInfo.asFrag)
        )
      )
    )
  )
}

case class ContactInfo(emailUser: String,
                       emailDomain: String,
                       phoneCountryCode: String,
                       phoneNumber: String,
                       website: String,
                       linkedin: String,
                       github: String) {
  def asFrag: Frag = {
    List(
      List(
        frag(em(raw("Email:&nbsp;")), raw("&nbsp;"), tag("binary-obscured")(attr("data-before") := emailUser, attr("data-after") := emailDomain)("@")),
        frag(em(raw("Mobile:&nbsp;")), raw("&nbsp;"), tag("binary-obscured")(attr("data-before") := phoneCountryCode, attr("data-after") := phoneNumber)(" ")),
        frag(em(raw("Website:&nbsp;")), raw("&nbsp;"), a(href := website)(website))
      ),
      List(
        frag(em(i(`class` := "fab fa-linkedin-in", title := "LinkedIn"), raw(":&nbsp;")), raw("&nbsp;"), a(href := linkedin)(linkedin)),
        frag(em(i(`class` := "fab fa-github", title := "GitHub"), raw(":&nbsp;")), raw("&nbsp;"), a(href := github)(github))
      )
    )
      .map(i => div(`class` := "six columns")(p(i.reduceLeft((l, r) => frag(l, br, r)))))
  }
}