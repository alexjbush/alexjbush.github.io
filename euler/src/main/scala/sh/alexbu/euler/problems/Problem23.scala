package sh.alexbu.euler.problems

object Problem23 {

  sealed trait AbundanceState

  case object Deficient extends AbundanceState

  case object Perfect extends AbundanceState

  case object Abundant extends AbundanceState

  def getDivisors(n: Int): Seq[Int] = {
    Problem12.getFactors(n).dropRight(1)
  }

  def getAbundance(n: Int): AbundanceState = {
    val res = getDivisors(n).sum
    if (res > n) Abundant
    else if (res == n) Perfect
    else Deficient
  }

  def getSumOfAbundantNumbers(limit: Int): Set[Int] = {
    val abundant = (1 to limit).filter(i => getAbundance(i) == Abundant).toSet
    abundant.flatMap(i => abundant.map(_ + i))
  }

  def getNumbersNotSumOfAbundant: Seq[Int] = {
    val sumed = getSumOfAbundantNumbers(28123)
    (1 to 28123).filterNot(sumed.contains)
  }

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${getNumbersNotSumOfAbundant.sum}")
  }

}
