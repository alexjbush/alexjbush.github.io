package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem11 extends FlatSpec with Matchers {

  val test = List(1, 2, 3, 4, 5, 6, 7, 8, 9)
  val testBlock = Problem11.Block(test)

  "rows" should "return the right rows" in {
    testBlock.rows.last should be(List(7, 8, 9))
  }

  "cols" should "return the right cols" in {
    testBlock.columns.last should be(List(3, 6, 9))
  }

  "diagDown" should "return the right diags" in {
    testBlock.diagDown should be(List(List(1), List(2, 4), List(3, 5, 7), List(6, 8), List(9)))
  }

  "diagUp" should "return the right diags" in {
    testBlock.diagUp should be(List(List(7), List(4, 8), List(1, 5, 9), List(2, 6), List(3)))
  }

  "highestProductInLine" should "return the example" in {
    testBlock.highestProductInLine(4)(List(6, 26, 63, 78, 14, 5)) should be(1788696)
  }

  "problemNumbers" should "return correct values" in {
    Problem11.problemNumbers.head should be(8)
    Problem11.problemNumbers.last should be(48)
  }

}
