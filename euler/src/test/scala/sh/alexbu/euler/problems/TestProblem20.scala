package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem20 extends FlatSpec with Matchers {

  "factorial" should "give the example" in {
    Problem20.factorial(10).toString should be("3628800")
  }

}
