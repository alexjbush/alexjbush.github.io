package sh.alexbu.euler.problems

object Problem4 {

  def isPalindrome(n: Int): Boolean = {
    def loop(s: String): Boolean = {
      if (s.length < 2) true
      else if (s.head != s.last) false
      else loop(s.substring(1, s.length - 1))
    }

    val str = n.toString
    loop(str)
  }

  def isProductOfTwoThreeDigitSums(n: Int): Boolean = {
    (999 to 100 by -1).exists { i =>
      val res = n / i.toDouble
      res.round.toDouble == res && res.round.toString.length == 3
    }
  }

  def largestPalindrome(n: Int, cond: Int => Boolean): Int = {
    (n to 0 by -1).filter(isPalindrome).filter(cond).head
  }

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${largestPalindrome(999 * 999, isProductOfTwoThreeDigitSums)}")
  }

}
