package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem8 extends FlatSpec with Matchers {

  "largestProduct" should "run the test case" in {
    Problem8.largestProduct(Problem8.problemList, 4) should be(5832)
  }


}
