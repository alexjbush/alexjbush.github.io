package sh.alexbu.euler.problems

object Problem14 {

  def collatzLengthUnderN(n: Int): Map[Long, Int] = {
    def loop(stack: List[Long], acc: Map[Long, Int]): Map[Long, Int] = stack match {
      case Nil => acc
      case h :: Nil if h >= n => acc
      case h :: t => val next = if (h % 2 == 0) h / 2 else 3 * h + 1
        if (acc.contains(next)) {
          val newStack = if (t.isEmpty) h + 1 :: t else t
          loop(newStack, acc + ((h, acc(next) + 1)))
        }
        else loop(next :: stack, acc)
    }

    loop(List(2), Map(1L -> 1))
  }

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${collatzLengthUnderN(1000001).maxBy(_._2)._1}")
  }

}
