package sh.alexbu.euler.problems

object Problem24 {


  case class Permutation(perm: Seq[Int]) {

    def nextPermutation: Option[Permutation] = {
      //012   021   102   120   201   210

      def loop(left: Seq[Int], mid: Int, right: Seq[Int]): Option[Permutation] = {
        val higher = right.filter(_ > mid)
        if (higher.isEmpty && left.isEmpty) None
        else if (higher.isEmpty) {
          val (newLeft, newMid) = left.splitAt(left.length - 1)
          loop(newLeft, newMid.head, mid +: right)
        }
        else {
          val newMid = higher.min
          val newRight = (mid +: right.filterNot(_ == newMid)).sorted
          Some(Permutation(left ++ (newMid +: newRight)))
        }
      }

      val (left, mid) = perm.splitAt(perm.length - 1)
      loop(left, mid.head, Seq())
    }

    override def toString: String = perm.mkString
  }

  def permutationStream(perm: Seq[Int]): Stream[Permutation] = {
    def loop(thisPerm: Option[Permutation]): Stream[Permutation] = thisPerm match {
      case Some(p) => Stream.cons(p, loop(p.nextPermutation))
      case None => Stream.empty
    }

    loop(Some(Permutation(perm)))
  }

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${permutationStream(Seq(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)).take(1000000).last.toString}")
  }

}
