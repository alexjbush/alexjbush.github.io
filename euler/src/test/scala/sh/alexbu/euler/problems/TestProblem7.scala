package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem7 extends FlatSpec with Matchers {

  "primeStream" should "return a list of 6 primes" in {
    Problem7.primeStream.take(6) should be(List(2, 3, 5, 7, 11, 13))
  }


}
