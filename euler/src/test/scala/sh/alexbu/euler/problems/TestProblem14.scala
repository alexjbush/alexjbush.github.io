package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem14 extends FlatSpec with Matchers {


  "collatzLengthUnderN" should "create a correct sequence" in {
    Problem14.collatzLengthUnderN(3) should be(Map(1 -> 1, 2 -> 2))
    Problem14.collatzLengthUnderN(13)(13) should be(10)
  }


}
