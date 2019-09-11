package sh.alexbu.euler.problems

import Problem24.Permutation
import org.scalatest.{FlatSpec, Matchers}

class TestProblem25 extends FlatSpec with Matchers {

  "indexedFibStream" should "give the example" in {
    Problem25.indexedFibStream.filter(_._2 == 12).head._1.toString should be ("144")
  }


}
