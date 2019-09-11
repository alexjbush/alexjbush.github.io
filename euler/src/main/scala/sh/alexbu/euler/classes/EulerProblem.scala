package sh.alexbu.euler.classes

trait EulerProblem {

  def title: String

  def result(): String

  def maybeInput: Option[String] = None

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${result()}")
  }

}

trait EulerProblemWithInput extends EulerProblem {

  def input: String

  override def maybeInput: Option[String] = Some(input)

}