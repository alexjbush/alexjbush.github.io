package sh.alexbu.euler.problems

object Problem20 {

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

    def *(times: Int): BigInt = {
      Seq.fill(times)(this).foldLeft(BigInt(Seq()))((z, i) => z + i)
    }

    override def toString: String = n.mkString
  }

  def factorial(n: Int): BigInt = {
    (1 to n).foldLeft(BigInt(Seq(1)))(_ * _)
  }

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${factorial(100).toString.map(_.asDigit).sum}")
  }

}
