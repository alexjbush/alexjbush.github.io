package sh.alexbu.euler.problems

object Problem9 {

  def pythagoreanTriplet: Stream[(Int, Int, Int)] = {
    Stream.from(2).flatMap { b =>
      (1 until b).map { a =>
        (a * a, b * b, a * a + b * b)
      }.filter(v => math.sqrt(v._3).isWhole())
        .map(z => (math.sqrt(z._1).toInt, math.sqrt(z._2).toInt, math.sqrt(z._3).toInt))
    }
  }

  def problem8: Int = {
    val res = pythagoreanTriplet.filter(z => z._1 + z._2 + z._3 == 1000).head
    res._1 * res._2 * res._3
  }

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${problem8}")
  }

}
