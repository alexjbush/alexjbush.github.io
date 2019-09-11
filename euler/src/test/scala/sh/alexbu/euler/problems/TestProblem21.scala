package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem21 extends FlatSpec with Matchers {

  "properDivisors" should "give the example" in {
    Problem21.properDivisors(220).sum should be(284)
    Problem21.properDivisors(284).sum should be(220)
  }

}
