package sh.alexbu.euler.problems

object Problem26 {

  def toFraction(num: Int, denom: Int, precision: Int): List[Int] = {

    (BigDecimal(num, new java.math.MathContext(precision)) / denom).toString().splitAt(2)._2.toList.map(_.asDigit)

    //    def loop(dec: BigDecimal, pos: BigDecimal): Stream[Int] = {
    //
    //      val closest = (0 until 10).map { i =>
    //        (i, num.abs - ((dec + i * pos) * denom).abs)
    //      }.filterNot(_._2 < 0).minBy(_._2)
    //
    //      if (closest._2 == 0) Stream.cons(closest._1, Stream.empty)
    //      else {
    //        Stream.cons(closest._1, loop(dec + closest._1 * pos, pos / 10))
    //      }
    //
    //    }
    //
    //    loop(BigDecimal(0, new java.math.MathContext(precision)), BigDecimal(0.1, new java.math.MathContext(precision)))
  }

  def longestPatternBack(n: List[Int], threshold: Int = 3): Option[Seq[Int]] = {
    val nrev = n.reverse
    val res = (1 until nrev.length).find { i =>
      val (h, t) = nrev.splitAt(i)
      val rep = (0 until threshold).flatMap(i => h)
      t.startsWith(rep)
    }
    res.map(i => nrev.splitAt(i)._1.reverse)
  }

  def findCycle(denom: Int): (Int, Option[Seq[Int]]) = {

    def loop(prec: Int): (Int, Option[Seq[Int]]) = {
      val frac = toFraction(1, denom, prec + 10).take(prec).toList
      val res = {
        if (frac.length != prec) (denom, None)
        else {
          val l = longestPatternBack(frac)
          if (l.isEmpty) loop(prec * 2)
          else (denom, l)
        }
      }
      res
    }

    loop(50)
  }

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${(1 to 1000).map(Problem26.findCycle(_)).filter(_._2.isDefined).maxBy(_._2.get.length)._1}")
  }

}
