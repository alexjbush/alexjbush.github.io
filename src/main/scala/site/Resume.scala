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
    "+64",
    "20 4196 0194",
    "https://alexbu.sh",
    "https://www.linkedin.com/in/alex-j-bush/",
    "https://github.com/alexjbush"
  )

  val profile: String =
    """
      |A passionate and experienced Hadoop engineer, who's interests span from Spark application
      |development and functional programming in Scala to infrastructure automation and security.
      |With technical leadership experience as both a DevOps Engineer and Data Engineer across both on-premises and in both the AWS and Azure clouds, this deep
      |cross-functional knowledge allows unique insight into solving Data problems in a creative way,
      |a strong advantage in an industry driven largely by technical innovation.
    """.stripMargin.replaceAll("\n", " ")

  val workExperience = WorkExperience(
    Company(
      "KPMG Lighthouse",
      "Manager (Data Engineer)",
      "Wellington, New Zealand",
      Position(
        "As Data Engineer",
        "September 2019 - current"
      )
    ),
    Company(
      "Cox Automotive Data Solutions",
      "Lead Data Engineer/Hadoop DevOps Engineer",
      "London, United Kingdom",
      Position(
        "As Lead Data Engineer",
        "April 2018 - August 2019",
        "Co-led architectural design, planning and execution of migration of entire Data platform, data assets and data pipelines from Cloudera (HDFS, YARN, Impala) IaaS platform to Azure Databricks (ADLS, Spark) PaaS platform. Involved phased migration of projects with zero downtime of data pipelines and delivered significant reduction in operational expenses",
        "Developed build and deployment application for teams to self-management the building, provisioning and running of data pipelines in isolated environments in Azure Databricks",
        "Was one of two lead Data Engineering team members, sharing responsibility of the entire Data Engineering pipeline and platform leading internal Data Engineering projects in Apache Spark, throughout design, implementation, regression testing, release and optimisation",
        "Acted as Azure Cloud SME within the company, offering advice and best practices for wider architectural and networking designs and implementations",
        """Was a key contributor to the Waimak Spark library, aiming to provide a BI/Data Science-focused Spark application framework that abstracts away complex Data Engineering productionisation and optimisation code from business logic. Also championed the open-sourcing of the library, advocating to senior management about the benefits of open-sourcing projects. The library can be found at: <a href=\"https://github.com/CoxAutomotiveDataSolutions/waimak\">github.com/CoxAutomotive&shy;DataSolutions/waimak</a>""",
        "Mentored junior Data Engineering team members, teaching functional programming concepts and practical software engineering principles and assisted with upskilling of BI and Data Science team members both with Hadoop concepts and simple Spark Scala development"
      ),
      Position(
        "As Hadoop DevOps Engineer",
        "November 2016 - April 2018",
        "Automated complete build of secure (Kerberos and SSL) CDH clusters using Ansible and Cloudera Director for use locally in Docker and for both Azure and AWS cloud environments",
        "Wrote a set of cluster benchmarking tools and benchmarked performance of various AWS and Azure instance configurations",
        "Acted as both AWS and Azure cloud SME within the business unit, architecting and implementing all technical infrastructure solutions for the team",
        "Was responsible for migration from non-secure CDH cluster to secure (Kerberos, SSL and HDFS encryption) CDH cluster, including migration of data and projects",
        "Was responsible for all Data Engineering/Hadoop infrastructure in the Cloud, including networking, security, RBAC model and administration, AD integration, Azure Data Lake Storage and other Azure storage accounts",
        """Constantly innovated solutions for DevOps and Infrastructure including creating a custom ADLS authentication module, creating custom Zeppelin and Livy CDH parcels, providing patches back to the Apache Zeppelin project, and setting up the Jenkins build and deploy pipeline""",
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
        "Performed multiple HDP version upgrades through development clusters to production clusters and worked closely with Hortonworks engineering to triage and fix bugs in the HDP stack"
      ),
      Position(
        "Multinational Banking and Financial Services Company",
        "December 2015",
        "Rapid deployment of Hortonworks PoC Security benchmark cluster in AWS utilising entire HDP security suite including HDFS/HBase encryption zones (Ranger KMS), Kerberos and Knox"
      )
    ),
    Company(
      "British Gas",
      "Various Roles",
      "Staines-upon-Thames, United Kingdom",
      Position(
        "Hadoop Platform Engineer",
        "January 2015 to December 2015",
        "Formed a core part of the Hadoop Administration team whose daily tasks included managing multiple production Hadoop clusters",
        "Heavily involved with the parallel migration of several hundred-node production clusters through major Hortonworks release versions",
        "Automated end-to-end creation of Hadoop clusters on physical machines and in AWS cloud using Ansible, Kickstart and Ambari Blueprints"
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

  val education = Education(
    School(
      "University of Edinburgh",
      "https://ed.ac.uk",
      "MPhys",
      "Masters in Computational Physics with Honors",
      "https://ph.ed.ac.uk",
      Project(
        "Masters Project",
        "Radiative Transfer on GPUs using NVIDIA CUDA"
      ),
      Project(
        "Senior Honors Project",
        "Lattice QCD on GPUs using NVIDIA CUDA"
      )
    )
  )

  val academicExperience = AcademicExperience(
    AcademicAward(
      "EPSRC Summer Vacation Research Bursary",
      "Edinburgh",
      AcademicPosition(
        "Undergraduate Research",
        "June 2011 to August 2011"
      )
    )
  )

  val speakingExperience = SpeakingExperience(
    Talk(
      "Spark + AI Summit Europe",
      "Amsterdam, Netherlands",
      "October 2019",
      "Best Practices for Building and Deploying Data Pipelines in Apache Spark",
      "https://youtu.be/1WUIua-xjJA"
    )
  )

  val technicalSkills = TechnicalSkills(
    Skills(
      "Cloud and PaaS Skills",
      "Azure, Azure Databricks, Azure Datalake Storage, Azure KeyVault, Amazon Web Services (AWS), S3, EMR, Athena, Presto")
      ,
    Skills(
      "Data Engineering Skills",
      "Apache Spark (Scala), Impala, Hive, Hadoop Java APIs, Kafka"
    ),
    Skills(
      "Hadoop Administration Skills",
      "Cloudera Manager/Director/Altus, Sentry, Apache Ambari, Ranger"
    ),
    Skills(
      "Software Engineering Skills",
      "Scala, Git/Gitflow, Functional Programming, Maven, Akka, Python, Scala Cats"
    ),
    Skills(
      "DevOps Skills",
      "Jenkins, Ansible, Docker, Travis, Maven Central"
    ),
    Skills(
      "Infrastructure/Platform Skills",
      "Linux Administration (CentOS), Bash, Kerberos (AD/FreeIPA), SSL (Certmonger/AD CS), Networking"
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
        ),
        hr,
        section(
          div(`class` := "row")(
            div(`class` := "six columns")(
              div(`class` := "row")(
                div(`class` := "twelve columns")(
                  p(`class` := "upper")(
                    raw("Education")
                  )
                )
              ),
              div(`class` := "row")(
                div(`class` := "twelve columns")(
                  education.asFrag
                )
              )
            ),
            div(`class` := "six columns")(
              div(`class` := "row")(
                div(`class` := "twelve columns")(
                  p(`class` := "upper")(
                    raw("Academic Experience")
                  )
                ),
              ),
              div(`class` := "row")(
                div(`class` := "twelve columns")(
                  academicExperience.asFrag
                )
              )
            )
          )
        ),
        hr,
        section(
          div(`class` := "row")(
            div(`class` := "twelve columns")(
              p(`class` := "upper")(
                raw("Speaking Experience")
              )
            )
          ),
          div(`class` := "row")(
            speakingExperience.asFrag,
          )
        ),
        hr,
        section(
          div(`class` := "row")(
            div(`class` := "twelve columns")(
              p(`class` := "upper")(
                raw("Technical Skills")
              )
            )
          ),
          div(`class` := "row")(
            technicalSkills.asFrag,
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
  def asFrag: Frag = companies.map(_.asFrag).reduceLeft((l, r)=> frag(l, br, r))
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
      positions.map(_.asFrag)
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

case class Education(schools: School*) {
  def asFrag: Frag = frag(schools.map(_.asFrag))
}

case class School(name: String, url: String, award: String, titleName: String, titleLink: String, projects: Project*) {
  def asFrag: Frag = {
    frag(
      div(`class` := "row")(
        div(`class` := "twelve columns")(
          div(`class` := "nobreak")(
            p(
              strong(
                a(href := url)(name)
              )
            )
          )
        )
      ),
      div(`class` := "row")(
        div(`class` := "one column")(),
        div(`class` := "eleven columns")(
          div(`class` := "nobreak")(
            p(award, ", ", a(href := titleLink)(titleName)),
            if (projects.nonEmpty) ul {
              projects.map(_.asFrag)
            }
            else frag()
          )
        )
      )
    )
  }
}

case class Project(`type`: String, title: String) {
  def asFrag: Frag =
    li(
      `type`, ": ", strong(title)
    )
}

case class AcademicExperience(awards: AcademicAward*) {
  def asFrag: Frag = frag(awards.map(_.asFrag))
}

case class AcademicAward(name: String, location: String, positions: AcademicPosition*) {
  def asFrag: Frag = {
    frag(
      div(`class` := "row")(
        div(`class` := "twelve columns")(
          div(`class` := "nobreak")(
            p(
              strong(name),
              raw("&nbsp;&nbsp;"),
              location
            )
          )
        )
      ),
      positions.map(_.asFrag)
    )
  }
}

case class AcademicPosition(title: String, date: String) {
  def asFrag: Frag =
    div(`class` := "row")(
      div(`class` := "one column")(),
      div(`class` := "eleven columns")(
        div(`class` := "nobreak")(
          p(
            em(title),
            strong(`class` := "u-pull-right")(date)
          )
        )
      )
    )
}

case class SpeakingExperience(talks: Talk*) {
  def asFrag: Frag = {
    talks.map(_.asFrag).reduceLeft((l, r)=> frag(l, br, r))
  }
}

case class Talk(event: String, location: String, date: String, title: String, link: String) {
  def asFrag: Frag = {
    frag(
      div(`class` := "row")(
        div(`class` := "twelve columns")(
          div(`class` := "nobreak")(
            p(
              strong(event),
              raw("&nbsp;&nbsp;"),
              location
            ),
            p(
              em(title),
              strong(`class` := "u-pull-right")(date)
            ),
            p(
              a(href:=link)(link)
            )
          )
        )
      )
    )
  }
}

case class TechnicalSkills(skills: Skills*) {

  val (l, r) = skills.splitAt(Math.ceil(skills.length / 2.0).toInt)

  def asFrag: Frag =
    frag(
      List(l, r)
        .map(
          v =>
            div(`class` := "six columns")(
              v.map(_.asFrag)
            )
        )
    )

}

case class Skills(`type`: String, skills: String) {
  def asFrag: Frag =
    div(`class` := "row")(
      div(`class` := "twelve columns")(
        div(`class` := "nobreak")(
          p(strong(`type`)),
          p(skills)
        )
      )
    )
}
