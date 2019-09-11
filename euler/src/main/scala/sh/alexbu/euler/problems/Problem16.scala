package sh.alexbu.euler.problems

object Problem16 {

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

  def powerSum(power: Int): Int = {
    val two = BigInt(Seq(2))
    (2 to power).foldLeft(two)((z, _) => z * 2).toString.map(_.asDigit).sum
  }

  def main(args: Array[String]): Unit = {
    println(s"${powerSum(1000)}")
  }

}
