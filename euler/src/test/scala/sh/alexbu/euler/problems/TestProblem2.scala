package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem2 extends FlatSpec with Matchers {

  "fibStream" should "return a sequence of fib numbers" in {
    Problem2.fibStream.take(4) should be(Seq(1, 2, 3, 5))
  }
}
