package sh.alexbu.euler.problems

object Problem21 {

  def properDivisors(n: Int): Seq[Int] = (1 until n).filter(n % _ == 0)

  def sumDivisors(n: Int): Map[Int, Int] = {
    (2 until n).map(i => i -> properDivisors(i).sum).toMap
  }

  def amicableNumbers(n: Int): Seq[Int] = {
    val divisors = sumDivisors(n)
    divisors.filter { kv =>
      kv._2 == divisors.getOrElse(kv._1, -1) && kv._1 == divisors.getOrElse(kv._2, -1) && kv._1 != kv._2
    }.keys.toSeq
  }

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${amicableNumbers(10000).sum}")
  }

}
