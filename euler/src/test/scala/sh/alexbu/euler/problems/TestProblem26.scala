package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem26 extends FlatSpec with Matchers {

  "toFraction" should "give the example" in {
    Problem26.toFraction(1, 2, 10).toList should be(Seq(5))
    Problem26.toFraction(1, 7, 20).take(9).toList should be(List(1, 4, 2, 8, 5, 7, 1, 4, 2))
    Problem26.toFraction(1, 239, 200).take(100).length should be(100)
  }

  "longestBackPattern" should "give the examples" in {
    Problem26.longestPatternBack(List(9, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3)) should be(Some(List(1, 2, 3)))
  }

  "testExample" should "find 7 as the one" in {
    (1 to 10).map(Problem26.findCycle(_)).filter(_._2.isDefined).maxBy(_._2.get.length)._1 should be(7)
  }


}
