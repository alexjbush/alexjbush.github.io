package sh.alexbu.euler.problems

import scala.collection.mutable

object Problem27 {

  val primeCache = new IsPrimeCache

  def rangeString(maxA: Int, maxB: Int): Stream[(Int, Int)] = for {
    a <- Stream.from(-maxA, 2).takeWhile(_ <= maxA)
    b <- (2 to maxB).toStream.filter(primeCache.isPrime)
  } yield (a, b)

  def longestPrimeSequence(a: Int, b: Int): Int = {
    Stream
      .from(0)
      .filterNot(n => b.isEven && (a.isEven == n.isEven))
      .filterNot(n => !b.isEven && (a.isEven != n.isEven))
      .takeWhile(n => primeCache.isPrime(n * n + a * n + b))
      .length
  }

  def main(args: Array[String]): Unit = {
    val ((ra, rb), _) = rangeString(999, 1000)
      .filter { case (a, b) => primeCache.isPrime(1 + a + b) }
      .map {
        case ab@(a, b) => (ab, longestPrimeSequence(a, b))
      }
      .maxBy(_._2)

    println(s"Answer: ${ra * rb}")
  }

  //when n=0 b must be prime
  //when n=1 a must be odd as b must be odd
  //when n=1 1 + a + b must be prime

  implicit class IntUtils(i: Int) {
    def isEven: Boolean = i % 2 == 0
  }

}

class IsPrimeCache {

  val cache: mutable.Map[Int, Boolean] = mutable.Map.empty

  def isPrime(n: Int): Boolean = {
    if (n < 2) false
    else {
      cache.get(n) match {
        case Some(p) => p
        case None =>
          val upper = math.sqrt(n).floor.toInt
          val p = !(2 to upper).exists(n % _ == 0)
          cache.update(n, p)
          p
      }
    }

  }
}
