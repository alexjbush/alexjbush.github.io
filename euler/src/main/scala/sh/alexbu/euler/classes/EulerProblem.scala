package sh.alexbu.euler.classes

trait EulerProblem extends App {

  def result(): String

  override def main(args: Array[String]): Unit = {
    println(s"Answer: ${result()}")
  }

}
