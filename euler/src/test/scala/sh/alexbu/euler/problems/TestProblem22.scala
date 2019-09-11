package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem22 extends FlatSpec with Matchers {

  "loadNames" should "load and split the names properly" in {
    val names = Problem22.loadNames
    names.head should be("MARY")
    names.last should be("ALONSO")
    names.sorted.head should be("AARON")
  }

  "nameScore" should "score COLIN" in {
    Problem22.nameScore(("COLIN", 937)) should be(49714)
  }

}
