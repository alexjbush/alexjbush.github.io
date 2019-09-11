package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem1 extends FlatSpec with Matchers {

  "sumMultiples" should "pass the test in the description" in {
    Problem1.sumMultiples(List(3, 5), 10) should be(23)
  }
}
