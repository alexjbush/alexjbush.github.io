package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem5 extends FlatSpec with Matchers {

  "isEvenlyDivisibleBy" should "be divisible" in {
    Problem5.isEvenlyDivisibleBy(1 to 10)(2520) should be(true)
    Problem5.isEvenlyDivisibleBy(1 to 10)(2521) should be(false)
  }


}
