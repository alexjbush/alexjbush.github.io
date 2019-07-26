package site

import scalatags.Text
import scalatags.Text.all._
import scalatags.Text.tags2.{article, section}
import templates.FullWidthPage

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

  val profile: String =
    """
      |A passionate and experienced Hadoop engineer, who's interests span from Spark application
      |development and functional programming in Scala to infrastructure automation and security.
      |With technical leadership experience as both a DevOps Engineer and Data Engineer, this deep
      |cross-functional knowledge allows unique insight into solving Data problems in a creative way,
      |a strong advantage in an industry driven largely by technical innovation.
    """.stripMargin.replaceAll("\n", " ")

  val workExperience = WorkExperience(
    Company(
      "Cox Automotive Data Solutions",
      "Lead Data Engineer/Hadoop DevOps Engineer",
      "London, United Kingdom",
      Position(
        "As Lead Data Engineer",
        "April 2018 - current",
        "Was one of two lead Data Engineering team members, sharing responsibility of the entire Data Engineering pipeline",
        "Led internal Data Engineering projects (Apache Spark), owning the whole life-cycle (design, implementation, regression testing, release) and maintained and optimised existing Spark projects across the estate",
        "Was a key contributor to the Waimak Spark library, aiming to provide a BI/Data Science-focused Spark application framework that abstracts away complex Data Engineering productionisation and optimisation code from business logic",
        """Was a key member championing the open-sourcing of the Waimak Spark library, advocating to senior management about the benefits of open-sourcing projects. The library can be found at: <a href=\"https://github.com/CoxAutomotiveDataSolutions/waimak\">github.com/CoxAutomotive&shy;DataSolutions/waimak</a>""",
        "Mentored junior Data Engineering team members, teaching functional programming concepts and practical software engineering principles",
        "Assisted with upskilling BI and Data Science team members both with Hadoop concepts and simple Spark Scala development, and aimed to provided specific tooling they might need"
      ),
      Position(
        "As Hadoop DevOps Engineer",
        "November 2016 - April 2018",
        "Automated complete build of secure (Kerberos and SSL) CDH clusters using Ansible and Cloudera Director. Automation was developed locally using custom configured Docker clusters against FreeIPA (and against AD DC/CS automated with Vagrant and Ansible) and in AWS and Azure against FreeIPA and Active Directory",
        "Wrote a set of cluster benchmarking tools and used the cluster automation scripts to benchmark a variety of AWS and Azure configurations",
        "Was responsible for migration from non-secure CDH cluster to secure (Kerberos, SSL and HDFS encryption) CDH cluster, including migration of data and projects. Automation of SSL was done using Certmonger SCEP against ADCS NDES",
        "Was responsible for all Data Engineering/Hadoop infrastructure in the Cloud, including networking, security, RBAC model and administration, AD integration, Azure Data Lake Storage and other Azure storage accounts",
        """Constantly innovated solutions for DevOps and Infrastructure including creating a custom ADLS authentication module allowing users to authenticate against Azure without using shared service principals, creating a custom Zeppelin and Livy CDH parcels providing secure authenticated and encrypted access to cluster via notebooks, providing two patches back to the Apache Zeppelin project (<a href=\"https://issues.apache.org/jira/browse/ZEPPELIN-3098\">ZEPPELIN-3098</a>, <a href=\"https://issues.apache.org/jira/browse/ZEPPELIN-3656\">ZEPPELIN-3656</a>), and setting up the Jenkins build and deploy pipeline and associated application configuration wrapper and convenience tooling""",
        "Managed all internal and external technical communication and engagement around Hadoop infrastructure, typically concerning security and connectivity",
        "Led the technical task of open-sourcing the Waimak Spark library, and automated the build and release of the library to Maven Central using Travis"
      )
    ),
    Company(
      "Hortonworks",
      "Senior Consultant",
      "City of London, United Kingdom",
      Position(
        "Major National Retail and Commercial Bank",
        "January 2016 - November 2016",
        "Supported the installation and configuration of development through to production clusters using full HDP stack (Hive, HBase, Storm, Kafka, Flume, Spark, HDFS, Ranger, Knox, Solr, Oozie)",
        "Implemented a wide range of security features, including Ranger with SSL and Kerberos over a load-balancer",
        "Supported multiple projects through development and test and eventually deployment into production",
        "Designed and implemented a disaster recovery solution for HDFS, Hive, HBase and Kafka to increase resilience and platform confidence",
        "Performed multiple HDP version upgrades through development clusters to production clusters and worked closely with Hortonworks engineering to fix upgrade issues so the fixes were pushed back into the HDP stack for future upgrades",
        "Optimized the Hadoop cluster on clients existing infrastructure, and set up high availability load-balanced solution for Oozie",
        "Created custom alerting solutions based on metrics derived from Storm and Kafka"
      ),
      Position(
        "Multinational Banking and Financial Services Company",
        "December 2015",
        "Rapid deployment of Hortonworks PoC Security benchmark cluster utilising entire HDP security suite including HDFS/HBase encryption zones (Ranger KMS), Kerberos and Knox"
      )
    ),
    Company(
      "British Gas",
      "Various Roles",
      "Staines-upon-Thames, United Kingdom",
      Position(
        "Hadoop Platform Engineer",
        "January 2015 to December 2015",
        "Formed a core part of the Hadoop Administration team whose daily tasks included managing multiple production Hadoop clusters, KDC administration and key distribution and DNS management",
        "Heavily involved with the parallel migration of several hundred node production clusters through major Hortonworks release versions",
        "Automated end-to-end creation of Hadoop clusters on physical machines and in Cloud infrastructure using Ansible (infrastructure-as-code methodology) including provisioning of physical machines and Cloud instances and cluster builds using Ambari Blueprints, Kerberos and Knox"
      ),
      Position(
        "Graduate Hadoop Software Developer",
        "May 2014 to January 2015",
        "Developed production ingestion and export projects using Hive, Pig and Java UDFs with ingestion from a wide range of sources (JDBC, XML, REST)"
      ),
      Position(
        "Graduate SAP Developer",
        "September 2013 to May 2014"
      )
    )
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
        ),
        hr,
        section(
          div(`class` := "row")(
            div(`class` := "twelve columns")(
              p(`class` := "upper")(
                raw("Profile")
              )
            )
          ),
          div(`class` := "row")(
            div(`class` := "twelve columns")(
              p()(
                raw(profile)
              )
            )
          )
        ),
        hr,
        section(
          div(`class` := "row")(
            div(`class` := "twelve columns")(
              p(`class` := "upper")(
                raw("Work Experience")
              )
            )
          ),
          div(`class` := "row")(
            div(`class` := "twelve columns")(
              workExperience.asFrag
            )
          )
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

case class WorkExperience(companies: Company*) {
  def asFrag: Frag = frag(companies.map(_.asFrag))
}

case class Company(name: String, role: String, location: String, positions: Position*) {
  def asFrag: Frag =
    frag(
      div(`class` := "row")(
        div(`class` := "twelve columns")(
          div(`class` := "nobreak")(
            p(strong(name), raw("&nbsp;&nbsp;"), em(role), raw("&nbsp;&nbsp;"), location)
          )
        )
      ),
      positions.map(_.asFrag),
      br
    )
}

case class Position(title: String, date: String, tasks: String*) {
  def asFrag: Frag = {
    frag(
      div(`class` := "row")(
        div(`class` := "one column")(),
        div(`class` := "eleven columns")(
          div(`class` := "nobreak")(
            p(em(title), strong(`class` := "u-pull-right")(date))
          )
        )
      ),
      div(`class` := "row")(
        div(`class` := "one column")(),
        div(`class` := "eleven columns")(
          div(`class` := "nobreak")(
            if (tasks.nonEmpty) ul(
              tasks.map(t => li(raw(t)))
            )
            else frag()
          )
        )
      )
    )
  }
}