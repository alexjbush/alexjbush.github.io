package sh.alexbu.euler.problems

import Problem23.{Abundant, Perfect}
import Problem24.Permutation
import org.scalatest.{FlatSpec, Matchers}

class TestProblem24 extends FlatSpec with Matchers {

  "permutationStream" should "give the example" in {
    Problem24.permutationStream(Seq(0, 1, 2)).toList should be(
      List(
        Permutation(List(0, 1, 2)),
        Permutation(List(0, 2, 1)),
        Permutation(List(1, 0, 2)),
        Permutation(List(1, 2, 0)),
        Permutation(List(2, 0, 1)),
        Permutation(List(2, 1, 0)))
    )
  }


}
