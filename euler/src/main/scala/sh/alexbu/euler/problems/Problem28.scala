package sh.alexbu.euler.problems

object Problem28 {

  val isDiagonalStream: Stream[(Boolean, Int)] = Stream
    .iterate(List(1, 1, 1, 1))(_.map(2 +))
    .flatten
    .flatMap(i => true +: List.fill(i)(false))
    .zip(Stream.from(1))


  def diagonalGrid(width: Int): Stream[Int] =
    isDiagonalStream
      .take(width * width)
      .collect { case (true, i) => i }


  def main(args: Array[String]): Unit = {
    println(s"Answer: ${diagonalGrid(1001).sum}")
  }
}
