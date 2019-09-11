package sh.alexbu.euler.problems

object Problem29 {

  def numDistinctPowers(maxA: Int, maxB: Int): Int = {
    for {
      a <- (2 to maxA).toStream
      b <- (2 to maxB).toStream
    } yield BigInt(a).pow(b)
  }.toSet.size

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${numDistinctPowers(100, 100)}")
  }

}
