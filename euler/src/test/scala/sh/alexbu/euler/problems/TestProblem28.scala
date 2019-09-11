package sh.alexbu.euler.problems

import org.scalatest.{FunSpec, Matchers}

class TestProblem28 extends FunSpec with Matchers {

  it("first 5 numbers"){
    Problem28.diagonalGrid(5).toList should be (List(1, 3, 5, 7, 9, 13, 17, 21, 25))
  }

}
