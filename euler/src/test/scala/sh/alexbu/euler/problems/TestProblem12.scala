package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem12 extends FlatSpec with Matchers {


  "triangleStream" should "should return the example" in {
    Problem12.triangleStream.take(10) should be(Seq(1, 3, 6, 10, 15, 21, 28, 36, 45, 55))
  }

  "getFactors" should "get the correct factors of 28" in {
    Problem12.getFactors(28) should be(Seq(1, 2, 4, 7, 14, 28))
  }

}
