package sh.alexbu.euler.problems

object Problem3 {

  def isPrime(n: Int): Boolean = {
    val upper = math.sqrt(n).floor.toInt
    !(2 to upper).exists(n % _ == 0)
  }

  def largestPrimeFactor(n: Long): Int = {
    val upper = (n / 2.0).floor.toInt
    (upper to 2 by -1).filter { i =>
      n % i == 0 && isPrime(i)
    }.head
  }

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${largestPrimeFactor(600851475143L)}")
  }

}
