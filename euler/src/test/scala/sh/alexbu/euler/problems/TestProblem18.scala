package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem18 extends FlatSpec with Matchers {


  val test =
    """
      |3
      |7 4
      |2 4 6
      |8 5 9 3
    """.stripMargin

  "stringToLists" should "create a list of rows" in {
    Problem18.stringToLists(test) should be(Seq(Seq(3), Seq(7, 4), Seq(2, 4, 6), Seq(8, 5, 9, 3)))
  }

  "reduceTree" should "give the answer in the example" in {
    Problem18.reduceTree(Problem18.stringToLists(test)) should be (23)
  }

}
