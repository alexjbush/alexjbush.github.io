package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem6 extends FlatSpec with Matchers {

  "sumOfSquares" should "equal example" in {
    Problem6.sumOfSquares(1 to 10) should be(385)
  }

  "squareOfSums" should "equal example" in {
    Problem6.squareOfSums(1 to 10) should be(3025)
  }

  "diffSqrSumSumSqr" should "equal example" in {
    Problem6.diffSqrSumSumSqr(1 to 10) should be (2640)
  }

}
