package sh.alexbu.euler.problems

object Problem25 {

  def fibStream: Stream[BigInt] = {
    def next(nm1: BigInt, nm2: BigInt): Stream[BigInt] = {
      Stream.cons(nm1 + nm2, next(nm1 + nm2, nm1))
    }

    next(BigInt(Seq(0)), BigInt(Seq(1)))
  }

  case class BigInt(n: Seq[Int]) {

    def +(that: BigInt): BigInt = {
      val revZip = n.reverse.zipAll(that.n.reverse, 0, 0)
      val (result, remainder) = revZip.foldLeft((List(): List[Int], 0)) { (z, i) =>
        val res = i._1 + i._2 + z._2
        (res % 10 :: z._1, res / 10)
      }
      if (remainder != 0)
        BigInt(remainder :: result)
      else
        BigInt(result)
    }

    override def toString: String = n.mkString
  }

  def indexedFibStream: Stream[(BigInt,Int)] = fibStream.zipWithIndex.map(i => (i._1, i._2+1))

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${indexedFibStream.filter(_._1.n.length == 1000).head._2}")
  }

}
