package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem15 extends FlatSpec with Matchers {

  "findNumRoutes" should "match the example" in {
    Problem15.findNumRoutes(2) should be(6)
  }


}
