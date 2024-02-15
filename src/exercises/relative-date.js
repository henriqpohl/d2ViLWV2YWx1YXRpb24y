/*
 * Write a function that will take a date and compare with today date and return text:
 * - Today: same year, same month, same date
 * - Yesterday: date = today - 1
 * - This week: today - 7 < date < today - 1
 * - Last week: today - 14 < date <= today - 7
 * - This month: same year, same month, date <= today - 14
 * - Last month: month = current month - 1
 * - This year: same year
 * - last year: year = current year - 1
 * - Long time ago: everything else
 *
 * Lastly, please write a unit test for calculateRelativeDate function
 * */

const calculateRelativeDate = (inputDate) => {
  //return `TODO: Please see the above requirement`
  const inputDateElem = document.getElementById("relative-date-input")
  const msgElement = document.getElementById("relative-date-msg")

  if (inputDateElem.value === "") {
    alert("Please, select a date!")
    return
  }
  const todayDay = new Date().toISOString().slice(8, 10)
  const todayMonth = new Date().toISOString().slice(5, 7)
  const todayYear = new Date().toISOString().slice(0, 4)
  const userDay = new Date(inputDateElem.value).getDate()
  const userMonth = new Date(inputDateElem.value).getMonth() + 1
  const userYear = new Date(inputDateElem.value).getFullYear()

  const today = new Date().toISOString().slice(0, 10)
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10)
  const thisWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10)
  const lastWeek = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10)
  const lastMonth = new Date(Date.now() - 31 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10)
  const thisYear = new Date().getFullYear()
  const lastYear = new Date(
    new Date().setFullYear(new Date().getFullYear() - 1)
  )
    .toISOString()
    .slice(0, 10)
  const longTimeAgo = new Date(
    new Date().setFullYear(new Date().getFullYear() - 1)
  )
    .toISOString()
    .slice(0, 10)

  console.log(
    userMonth == todayMonth && userYear == todayYear && userDay <= todayDay
  )

  if (today === inputDateElem.value) {
    return `Today`
  } else if (yesterday === inputDateElem.value) {
    return `Yesterday`
  } else if (thisWeek === inputDateElem.value) {
    return `This Week`
  } else if (lastWeek === inputDateElem.value) {
    return `Last Week`
  } else if (
    userMonth == todayMonth &&
    userYear == todayYear &&
    userDay <= todayDay
  ) {
    return `This Month`
  } else if (lastMonth === inputDateElem.value) {
    return `Last Month`
  } else if (userYear === thisYear) {
    return `This Year`
  } else if (lastYear === inputDateElem.value) {
    return `Last Year`
  } else if (longTimeAgo > inputDateElem.value) {
    return `Long Time Ago`
  }
}

const View = {
  init: () => {
    document
      .getElementById("relative-date-btn")
      .addEventListener("click", () => {
        const msgElement = document.getElementById("relative-date-msg")
        const inputDateElem = document.getElementById("relative-date-input")
        msgElement.textContent = calculateRelativeDate(inputDateElem.value)
      })
  },
}

document.addEventListener("DOMContentLoaded", View.init)
export { calculateRelativeDate }
