package sh.alexbu.euler.problems

object Problem5 {

  def isEvenlyDivisibleBy(div: Seq[Int])(n: Int): Boolean = {
    !div.exists(n % _ != 0)
  }

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${Stream.from(2520, 10).filter(isEvenlyDivisibleBy(1 to 20)).head}")
  }

}
