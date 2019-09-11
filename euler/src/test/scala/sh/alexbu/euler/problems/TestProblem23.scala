package sh.alexbu.euler.problems

import Problem23.{Abundant, Perfect}
import org.scalatest.{FlatSpec, Matchers}

class TestProblem23 extends FlatSpec with Matchers {

  "getDivisors" should "look like example" in {
    Problem23.getDivisors(28) should be(Seq(1, 2, 4, 7, 14))
  }

  "getAbundance" should "copy the examples" in {
    Problem23.getAbundance(12) should be (Abundant)
    Problem23.getAbundance(28) should be (Perfect)
  }

  "getSumOfAbundantNumbers" should "do something" in {
    Problem23.getSumOfAbundantNumbers(30).sum should be (498)
  }


}
