package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem17 extends FlatSpec with Matchers {


  "numberToWords" should "get the example" in {
    Problem17.numberToWords(List(3,4,2)) should be("threehundredandfourtytwo")
  }

}
