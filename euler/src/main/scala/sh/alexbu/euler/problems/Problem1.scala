package sh.alexbu.euler.problems

import sh.alexbu.euler.classes.EulerProblem
import scala.scalajs.js.annotation._

@JSExportTopLevel("Problem1")
class Problem1 extends EulerProblem {

  def isMultipleOf(of: Seq[Int])(is: Int): Boolean = {
    of.exists(is % _ == 0)
  }

  def sumMultiples(multiples: Seq[Int], upto: Int): Int = {
    (0 until upto).foldLeft(0) { (z, i) =>
      if (isMultipleOf(multiples)(i)) i + z
      else z
    }
  }

  override def result(): String = sumMultiples(Seq(3, 5), 1000).toString

  override def title: String = "Multiples of 3 and 5"
}
