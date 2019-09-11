package sh.alexbu.euler.problems

object Problem19 {


  case class Date(day: Int, month: Int, year: Int, dayOfWeekNum: Int) {

    val dayNames: Seq[String] = Seq("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")

    val dayOfWeek: String = dayNames(dayOfWeekNum)

    val isLeapYear: Boolean = {
      if (year % 100 == 0 && year % 400 == 0) true
      else if (year % 100 == 0) false
      else if (year % 4 == 0) true
      else false
    }

    val daysInMonth: Int = {
      if (Seq(4, 6, 9, 11).contains(month)) 30
      else if (month == 2 && isLeapYear) 29
      else if (month == 2) 28
      else 31
    }

    val isLastDayOfMonth: Boolean = day == daysInMonth

    def nextDay: Date = {

      val nextDay = if (isLastDayOfMonth) 1 else day + 1
      val nextMonth = if (isLastDayOfMonth) (month % 12) + 1 else month
      val nextYear = if (isLastDayOfMonth && month == 12) year + 1 else year
      val nextDayNum = (dayOfWeekNum + 1) % 7
      Date(nextDay, nextMonth, nextYear, nextDayNum)

    }

    override def toString: String = s"${dayOfWeek}, $day/$month/$year"

  }

  val startDate = Date(1, 1, 1900, 0)

  def main(args: Array[String]): Unit = {
    println(s"Answer: ${Stream.iterate(startDate)(_.nextDay).takeWhile(_.year < 2001).count(d => d.dayOfWeekNum == 6 && d.day == 1 && d.year > 1900)}")
  }

}
