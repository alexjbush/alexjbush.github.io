---
name: Alex John Bush
contact:
  emailUser: alex.john.bush
  emailDomain: "gmail.com"
  phoneCountryCode: "+44"
  phoneNumber: "7725576052"
  website: "https://alexbu.sh"
profile: "A passionate and experienced Hadoop engineer, who's interests span from Spark application development and functional programming in Scala to infrastructure automation and security. With technical leadership experience as both a DevOps Engineer and Data Engineer, this deep cross-functional knowledge allows unique insight into solving Data problems in a creative way, a strong advantage in an industry driven largely by technical innovation."
workExperience:
  - company: Cox Automotive Data Solutions
    role: Hadoop DevOps Engineer/Data Engineer
    location: London, United Kingdom
    positions:
    - title: As Hadoop DevOps Engineer
      date: November 2016 - current
      tasks:
      - task: Automated complete build of secure (Kerberos and SSL) CDH clusters using Ansible and Cloudera Director. Automation was developed locally using custom configured Docker clusters against FreeIPA (and against AD DC/CS automated with Vagrant and Ansible) and in AWS and Azure against FreeIPA and Active Directory
      - task: Wrote a set of cluster benchmarking tools and used the cluster automation scripts to benchmark a variety of AWS and Azure configurations
      - task: Was responsible for migration from non-secure CDH cluster to secure (Kerberos, SSL and HDFS encryption) CDH cluster, including migration of data and projects. Automation of SSL was done using Certmonger SCEP against ADCS NDES
      - task: Was responsible for all Data Engineering/Hadoop infrastructure in the Cloud, including networking, security, RBAC model and administration, AD integration, Azure Data Lake Storage and other Azure storage accounts
      - task: "Constantly innovated solutions for DevOps and Infrastructure including creating a custom ADLS authentication module allowing users to authenticate against Azure without using shared service principals, creating a custom Zeppelin and Livy CDH parcels providing secure authenticated and encrypted access to cluster via notebooks, providing two patches back to the Apache Zeppelin project (<a href=\"https://issues.apache.org/jira/browse/ZEPPELIN-3098\">ZEPPELIN-3098</a>, <a href=\"https://issues.apache.org/jira/browse/ZEPPELIN-3656\">ZEPPELIN-3656</a>), and setting up the Jenkins build and deploy pipeline and associated application configuration wrapper and convenience tooling"
      - task: Was a key member championing the open-sourcing of the Waimak Spark library, advocating to senior staff about the benefits of open-sourcing projects
      - task: "Open-sourced the Waimak Spark library, and automated the build and release of the library to Maven Central using Travis. The library can be found at: <a href=\"https://github.com/CoxAutomotiveDataSolutions/waimak\">github.com/CoxAutomotive&shy;DataSolutions/waimak</a>"
      - task: Managed all internal and external technical communication and engagement around Hadoop infrastructure, typically concerning security and connectivity
    - title: As Data Engineer
      date: November 2017 - current
      tasks:
      - task: Was a key contributor to the Waimak Spark library, aiming to provide a BI/Data Science-focused Spark application framework that abstracts away complex Data Engineering productionisation and optimisation code from business logic
      - task: Led internal Data Engineering projects, owning the whole life-cycle (design, implementation, regression testing, release)
      - task: Was one of two core Data Engineering team members, sharing responsibility of the entire Data Engineering pipeline
      - task: Helped to mentor a junior Data Engineering team member, teaching functional programming concepts and practical software engineering principles
      - task: Assisted with upskilling BI and Data Science team members both with Hadoop concepts and simple Spark Scala development, and aimed to provided specific tooling they might need
  - company: Hortonworks
    role: Senior Consultant
    location: City of London, United Kingdom
    positions:
    - title: Major National Retail and Commercial Bank
      date: January 2016 - November 2016
      tasks:
      - task: Supported the installation and configuration of development through to production clusters using full HDP stack (Hive, HBase, Storm, Kafka, Flume, Spark, HDFS, Ranger, Knox, Solr, Oozie)
      - task: Implemented a wide range of security features, including Ranger with SSL and Kerberos over a load-balancer
      - task: Supported multiple projects through development and test and eventually deployment into production
      - task: Designed and implemented a disaster recovery solution for HDFS, Hive, HBase and Kafka to increase resilience and platform confidence
      - task: Performed multiple HDP version upgrades through development clusters to production clusters and worked closely with Hortonworks engineering to fix upgrade issues so the fixes were pushed back into the HDP stack for future upgrades
      - task: Optimized the Hadoop cluster on clients existing infrastructure, and set up high availability load-balanced solution for Oozie
      - task: Created custom alerting solutions based on metrics derived from Storm and Kafka
    - title: Multinational Banking and Financial Services Company
      date: December 2015
      tasks:
      - task: Rapid deployment of Hortonworks PoC Security benchmark cluster utilising entire HDP security suite including HDFS/HBase encryption zones (Ranger KMS), Kerberos and Knox
  - company: British Gas
    role: Various Roles
    location: "Staines-upon-Thames, United Kingdom"
    positions:
    - title: Hadoop Platform Engineer
      date: January 2015 to December 2015
      tasks:
      - task: Formed a core part of the Hadoop Administration team whose daily tasks included managing multiple production Hadoop clusters, KDC administration and key distribution and DNS management
      - task: "Heavily involved with the parallel migration of several hundred node production clusters through major Hortonworks release versions"
      - task: Automated end-to-end creation of Hadoop clusters on physical machines and in Cloud infrastructure using Ansible (infrastructure-as-code methodology) including provisioning of physical machines and Cloud instances and cluster builds using Ambari Blueprints, Kerberos and Knox
    - title: Graduate Hadoop Software Developer
      date: May 2014 to January 2015
      tasks:
      - task: Developed production ingestion and export projects using Hive, Pig and Java UDFs with ingestion from a wide range of sources (JDBC, XML, REST)
    - title: Graduate SAP Developer
      date: September 2013 to May 2014
education:
  - school: University of Edinburgh
    url: "https://ed.ac.uk"
    award: MPhys
    titleName: Masters in Computational Physics with Honors
    titleLink: "https://ph.ed.ac.uk"
    projects:
    - type: Masters Project
      title: Radiative Transfer on GPUs using NVIDIA CUDA
    - type: Senior Honors Project
      title: Lattice QCD on GPUs using NVIDIA CUDA
academicExperience:
  - name: EPSRC Summer Vacation Research Bursary
    location: Edinburgh
    positions:
     - title: Undergraduate Research
       date: June 2011 to August 2011
technicalSkills:
  - type: Data Engineering Skills
    skills: Apache Spark (Scala), Impala, Hive, Hadoop Java APIs, Kafka
  - type: Hadoop Administration Skills
    skills: Cloudera Manager/Director/Altus, Sentry, Apache Ambari, Ranger 
  - type: Software Engineering Skills
    skills: Scala, Git/Gitflow, Functional Programming, Maven, Akka, Python
  - type: DevOps Skills
    skills: Jenkins, Azure, AWS, Ansible, Docker, Travis, Maven Central
  - type: Infrastructure/Platform Skills
    skills: Linux Administration (CentOS), Bash, Kerberos (AD/FreeIPA), SSL (Certmonger/AD CS) 
---
