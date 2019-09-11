package sh.alexbu.euler.problems

object Problem17 {

  def numberToWords(n: List[Int]): String = n match {
    case 1 :: 0 :: 0 :: 0 :: Nil => "onethousand"
    case _ if n.length >= 4 => throw new IllegalArgumentException("Numbers greater than 1000 not supported")
    case i :: 0 :: 0 :: Nil => numberToWords(List(i)) + "hundred"
    case i :: j :: k :: Nil => numberToWords(List(i, 0, 0)) + "and" + numberToWords(List(j, k))
    case j :: k :: Nil if Seq(9, 7, 6).contains(j) => s"${numberToWords(List(j))}ty" + numberToWords(List(k))
    case 8 :: k :: Nil => "eighty" + numberToWords(List(k))
    case 5 :: k :: Nil => "fifty" + numberToWords(List(k))
    case 4 :: k :: Nil => "forty" + numberToWords(List(k))
    case 3 :: k :: Nil => "thirty" + numberToWords(List(k))
    case 2 :: k :: Nil => "twenty" + numberToWords(List(k))
    case 1 :: k :: Nil if Seq(9, 7, 6, 4).contains(k) => s"${numberToWords(List(k))}teen"
    case 1 :: 8 :: Nil => "eighteen"
    case 1 :: 5 :: Nil => "fifteen"
    case 1 :: 3 :: Nil => "thirteen"
    case 1 :: 2 :: Nil => "twelve"
    case 1 :: 1 :: Nil => "eleven"
    case 1 :: 0 :: Nil => "ten"
    case 0 :: i :: Nil => numberToWords(List(i))
    case 9 :: Nil => "nine"
    case 8 :: Nil => "eight"
    case 7 :: Nil => "seven"
    case 6 :: Nil => "six"
    case 5 :: Nil => "five"
    case 4 :: Nil => "four"
    case 3 :: Nil => "three"
    case 2 :: Nil => "two"
    case 1 :: Nil => "one"
    case _ :: Nil => ""
  }

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${(1 to 1000).map(i => numberToWords(i.toString.map(_.asDigit).toList)).map(_.length).sum}")
  }

}
