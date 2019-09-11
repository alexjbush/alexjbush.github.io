package sh.alexbu.euler.problems

import org.scalatest.{FlatSpec, Matchers}

class TestProblem4 extends FlatSpec with Matchers {

  "isPalindrome" should "detect palindromes" in {
    Problem4.isPalindrome(9) should be(true)
    Problem4.isPalindrome(99) should be(true)
    Problem4.isPalindrome(999) should be(true)
    Problem4.isPalindrome(8008) should be(true)
  }

  "isPalindrome" should "detect false palindromes" in {
    Problem4.isPalindrome(91) should be(false)
    Problem4.isPalindrome(991) should be(false)
    Problem4.isPalindrome(8018) should be(false)
  }

  "isProductOfTwoThreeDigitSums" should "find if a number gets conditions" in {
    Problem4.isProductOfTwoThreeDigitSums(888*888) should be (true)
    Problem4.isProductOfTwoThreeDigitSums(99*99) should be (false)
  }

}
