package sh.alexbu.euler.problems

object Problem10 {

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${Problem7.primeStream.takeWhile(_ < 2000000).map(_.toLong).sum}")
  }

}
