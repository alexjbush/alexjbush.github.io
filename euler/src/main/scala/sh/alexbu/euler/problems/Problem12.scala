package sh.alexbu.euler.problems

object Problem12 {

  def triangleStream: Stream[Int] = {
    def next(last: Int, acc: Int): Stream[Int] = {
      val thisT = last + 1
      val thisAcc = acc + thisT
      Stream.cons(thisAcc, next(thisT, thisAcc))
    }

    next(0, 0)
  }

  def getFactors(n: Int): Seq[Int] = {
    val (sqrtN, isSquare) = (math.sqrt(n).floor.toInt, math.sqrt(n).isWhole())

    def loop(i: Int, low: Vector[Int], high: Vector[Int]): Seq[Int] = {
      if (i > sqrtN) low ++ high
      else if (n % i != 0) loop(i + 1, low, high)
      else if (i == sqrtN && isSquare) low.:+(i) ++ high
      else loop(i + 1, low.:+(i), high.+:(n / i))
    }

    loop(1, Vector(), Vector())

  }

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${triangleStream.filter(getFactors(_).lengthCompare(500) > 0).head}")
  }

}
