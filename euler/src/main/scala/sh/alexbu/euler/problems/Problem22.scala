package sh.alexbu.euler.problems

import scala.io.Source

object Problem22 {

  def loadNames: Seq[String] = {
    Source.fromResource("Problem22/names.txt").getLines.reduce(_ + _).replace("\"", "").split(",")
  }

  def nameScore(v: (String, Int)): Long = {
    v._1.map(_.toLong - 64).sum * (v._2 + 1)
  }

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${loadNames.sorted.zipWithIndex.map(nameScore).sum}")
  }

}
