package sh.alexbu.euler.problems

object Problem2 {

  def fibStream: Stream[Int] = {
    def next(nm1: Int, nm2: Int): Stream[Int] = {
      Stream.cons(nm1 + nm2, next(nm1 + nm2, nm1))
    }

    next(1, 0)
  }

  def sumEvenUntil(upto: Int): Int = {
    fibStream.takeWhile(_ <= upto).filter(_ % 2 == 0).sum
  }

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${sumEvenUntil(4000000)}")
  }

}
