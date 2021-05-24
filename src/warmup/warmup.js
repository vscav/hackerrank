/**
 * Solve Me First
 * Problem link: https://www.hackerrank.com/challenges/solve-me-first/problem
 */

export const solveMeFirst = (a, b) => {
  return a + b
}

/**
 * Simple Array Sum
 * Problem link: https://www.hackerrank.com/challenges/simple-array-sum/problem
 */

export const simpleArraySum = (ar) => {
  let result = 0
  ar.forEach((integer) => {
    result += integer
  })
  return result
}

/**
 * Compare the Triplets
 * Problem link: https://www.hackerrank.com/challenges/compare-the-triplets/problem
 */

export const compareTriplets = (a, b) => {
  let ap = 0
  let bp = 0

  for (let i = a.length; i-- > 0;) {
    if (a[i] > b[i]) ap++
    else if (a[i] < b[i]) bp++
  }

  return [ap, bp]
}

/**
 * A Very Big Sum
 * Problem link: https://www.hackerrank.com/challenges/a-very-big-sum/problem
 */

export const aVeryBigSum = (ar) => {
  return ar.reduce((a, b) => a + b)
}

/**
 * Diagonal Difference
 * Problem link: https://www.hackerrank.com/challenges/diagonal-difference/problem
 */

export const diagonalDifference = (arr) => {
  let diag1 = 0
  let diag2 = 0
  const length = arr.length

  for (let i = 0; i < length; i++) {
    diag1 += arr[i][i]
    diag2 += arr[length - 1 - i][i]
  }

  return Math.abs(diag1 - diag2)
}

/**
 * Plus Minus
 * Problem link: https://www.hackerrank.com/challenges/plus-minus/problem
 */

export const plusMinus = (arr) => {
  let p = 0
  let n = 0
  let z = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      p++
    } else if (arr[i] < 0) {
      n++
    } else {
      z++
    }
  }

  console.log((p / arr.length).toFixed(6))
  console.log((n / arr.length).toFixed(6))
  console.log((z / arr.length).toFixed(6))
}

/**
 * Staircase
 * Problem link: https://www.hackerrank.com/challenges/staircase/problem
 */

export const staircase = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '#'.repeat(i))
  }
}

/**
 * Mini-Max Sum
 * Problem link: https://www.hackerrank.com/challenges/mini-max-sum/problem
 */

export const miniMaxSum = (arr) => {
  arr = arr.sort((a, b) => a - b)
  const min = arr.slice(0, arr.length - 1).reduce((a, b) => a + b)
  const max = arr.slice(1, arr.length).reduce((a, b) => a + b)

  console.log(min, max)
}

/**
 * Birthday Cake Candles
 * Problem link: https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 */

export const birthdayCakeCandles = (ar) => {
  const max = Math.max(...ar)
  return ar.filter((v) => v === max).length
}

/**
 * Time Conversion
 * Problem link: https://www.hackerrank.com/challenges/time-conversion/problem
 */

export const timeConversion = (s) => {
  const time = s.split(':')

  let hour = Number(time[0])
  const minute = time[1]
  const second = time[2].substr(0, 2)
  const ampm = time[2].substr(2)

  if (hour === 12) {
    hour = 0
  }

  if (ampm === 'PM') {
    hour += 12
  }

  if (hour < 10) {
    hour = '0' + hour
  }

  return [hour, minute, second].join(':')
}
