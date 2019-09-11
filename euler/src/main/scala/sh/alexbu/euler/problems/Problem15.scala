package sh.alexbu.euler.problems

object Problem15 {

  def findNumRoutes(dim: Int): Long = {

    def loop(stack: Vector[(Int, Int)], score: Map[(Int, Int), Long]): Long = {
      stack match {
        case (0, 0) +: t => score((0, 1)) + score((1, 0))
        case (x, y) +: t if x < 0 || y < 0 || score.contains((x, y)) => loop(t, score)
        case (`dim`, y) +: t =>
          val newStack = t :+ (dim - 1, y) :+ (dim, y - 1)
          val newScore = score.+((dim -> y, score(dim, y + 1)))
          loop(newStack, newScore)

        case (x, `dim`) +: t =>
          val newStack = t :+ (x, dim - 1) :+ (x - 1, dim)
          val newScore = score.+((x -> dim, score(x + 1, dim)))
          loop(newStack, newScore)

        case (x, y) +: t =>
          val newStack = t :+ (x, y - 1) :+ (x - 1, y)
          val newScore = score.+((x -> y, score(x + 1, y) + score(x, y + 1)))
          loop(newStack, newScore)

      }
    }

    loop(Vector((dim, dim - 1), (dim - 1, dim)), Map(((dim, dim), 1L)))

  }


  def main(args: Array[String]): Unit = {
    println(s"Answer: ${findNumRoutes(20)}")
  }

}
