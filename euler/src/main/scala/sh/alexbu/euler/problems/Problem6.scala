package sh.alexbu.euler.problems

object Problem6 {

  def sumOfSquares(ns: Seq[Int]): Int = ns.foldLeft(0)((z, i) => i * i + z)

  def squareOfSums(ns: Seq[Int]): Int = {
    val s = ns.sum
    s * s
  }

  def diffSqrSumSumSqr(ns: Seq[Int]): Int = squareOfSums(ns) - sumOfSquares(ns)

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${diffSqrSumSumSqr(1 to 100)}")
  }
}
