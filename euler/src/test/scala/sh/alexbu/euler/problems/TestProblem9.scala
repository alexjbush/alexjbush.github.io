package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem9 extends FlatSpec with Matchers {

  "pythagoreanTriplet" should "run a triplet" in {
    Problem9.pythagoreanTriplet.take(1) should be(Seq((3, 4, 5)))
  }


}
