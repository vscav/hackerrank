/**
 * Grading Students
 * Problem link: https://www.hackerrank.com/challenges/grading/problem
 */

export const gradingStudents = (grades) => {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      const m = Math.ceil(grades[i] / 5) * 5

      if (m - grades[i] < 3) {
        grades[i] = m
      }
    }
  }

  return grades
}

/**
 * Apple and Orange
 * Problem link: https://www.hackerrank.com/challenges/apple-and-orange/problem
 */

export const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  console.log(apples.reduce((sum, d) => sum + (s - a <= d && d <= t - a), 0))
  console.log(oranges.reduce((sum, d) => sum + (s - b <= d && d <= t - b), 0))
}

/**
 * Number Line Jumps
 * Problem link: https://www.hackerrank.com/challenges/kangaroo/problem
 */

export const kangaroo = (x1, v1, x2, v2) => {
  if ((x1 - x2) % (v2 - v1) === 0 && !(x2 > x1 && v2 > v1)) return 'YES'
  else return 'NO'
}

/**
 * Breaking the Records
 * Problem link: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
 */

export const breakingRecords = (scores) => {
  let min = 0
  let max = 0
  let countMax = 0
  let countMin = 0

  scores.forEach((score, index) => {
    if (index === 0) {
      max = score
      min = score
    } else {
      if (score > max) {
        max = score
        countMax++
      }
      if (score < min) {
        min = score
        countMin++
      }
    }
  })

  return [countMax, countMin]
}

/**
 * Divisible Sum Pairs
 * Problem link: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
 */

export const divisibleSumPairs = (n, k, ar) => {
  let res = 0
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) res += 1
    }
  }
  return res
}

/**
 * Bill Division
 * Problem link: https://www.hackerrank.com/challenges/bon-appetit/problem
 */

export const bonAppetit = (bill, k, b) => {
  let actual = 0
  const charged = b
  if (k >= 0 && k < bill.length) {
    bill.forEach((value, index) => {
      if (index !== k) actual += value
    })
  }
  actual = actual / 2
  console.log(actual === charged ? 'Bon Appetit' : charged - actual)
}

/**
 * Electronics Shop
 * Problem link: hackerrank.com/challenges/electronics-shop/problem
 */

export const getMoneySpent = (keyboards, drives, b) => {
  const comparison = (a, b) => a - b
  keyboards.sort(comparison)
  drives.sort(comparison)
  let res = -1
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      const currentPair = keyboards[i] + drives[j]
      if (currentPair <= b && currentPair > res) res = currentPair
    }
  }
  return res
}

/**
 * Cats and a Mouse
 * Problem link: https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
 */

export const catAndMouse = (x, y, z) => {
  const a = Math.abs(z - x)
  const b = Math.abs(z - y)

  return a - b === 0 ? 'Mouse C' : a < b ? 'Cat A' : 'Cat B'
}

/**
 * The Hurdle Race
 * Problem link: https://www.hackerrank.com/challenges/the-hurdle-race/problem
 */

export const hurdleRace = (k, height) => {
  return Math.max(Math.max(...height) - k, 0)
}

/**
 * Designer PDF Viewer
 * Problem link: https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
 */

export const designerPdfViewer = (h, word) => {
  const alphabet = [
    { key: 'a', height: 0 },
    { key: 'b', height: 0 },
    { key: 'c', height: 0 },
    { key: 'd', height: 0 },
    { key: 'e', height: 0 },
    { key: 'f', height: 0 },
    { key: 'g', height: 0 },
    { key: 'h', height: 0 },
    { key: 'i', height: 0 },
    { key: 'j', height: 0 },
    { key: 'k', height: 0 },
    { key: 'l', height: 0 },
    { key: 'm', height: 0 },
    { key: 'n', height: 0 },
    { key: 'o', height: 0 },
    { key: 'p', height: 0 },
    { key: 'q', height: 0 },
    { key: 'r', height: 0 },
    { key: 's', height: 0 },
    { key: 't', height: 0 },
    { key: 'u', height: 0 },
    { key: 'v', height: 0 },
    { key: 'w', height: 0 },
    { key: 'x', height: 0 },
    { key: 'y', height: 0 },
    { key: 'z', height: 0 }
  ]

  alphabet.forEach((letter, i) => {
    letter.height = h[i]
  })

  const heightMap = alphabet.reduce((map, obj) => {
    map[obj.key] = obj.height
    return map
  }, {})

  let tallestLetter = 0
  for (const letter of word) {
    if (heightMap[letter] > tallestLetter) tallestLetter = heightMap[letter]
  }

  return word.length * tallestLetter
}

/**
 * Utopian Tree
 * Problem link: https://www.hackerrank.com/challenges/utopian-tree/problem
 */

export const utopianTree = (n) => {
  let height = 1
  for (let i = 0; i < n; i++) {
    height = i % 2 === 0 ? height * 2 : height + 1
  }
  return height
}

/**
 * Angry Professor
 * Problem link: https://www.hackerrank.com/challenges/angry-professor/problem
 */

export const angryProfessor = (k, a) => {
  for (let i = a.length; i-- > 0;) {
    if (a[i] <= 0) {
      --k
    }
  }

  return k <= 0 ? 'NO' : 'YES'
}

/**
 * Beautiful Days at the Movies
 * Problem link: https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
 */

export const beautifulDays = (i, j, k) => {
  const numberedDays = []
  for (let l = i; l <= j; l++) {
    numberedDays.push(l)
  }

  const reverse = (num) =>
    parseInt(String(num).split('').reverse().join(''), 10)

  return numberedDays
    .map((numberedDay) => numberedDay - reverse(numberedDay))
    .filter((numberedDay) => Number.isInteger(numberedDay / k)).length
}

/**
 * Viral Advertising
 * Problem link: https://www.hackerrank.com/challenges/strange-advertising/problem
 */

export const viralAdvertising = (n) => {
  let shared = 5
  let liked = 0
  let cumulative = 0

  for (let i = 0; i < n; i++) {
    liked = Math.floor(shared / 2)
    shared = liked * 3
    cumulative += liked
  }

  return cumulative
}

/**
 * Save the Prisoner!
 * Problem link: https://www.hackerrank.com/challenges/save-the-prisoner/problem
 */

export const saveThePrisoner = (n, m, s) => {
  return (m - 1 + s) % n || n
}

/**
 * Circular Array Rotation
 * Problem link: https://www.hackerrank.com/challenges/circular-array-rotation/problem
 */

export const circularArrayRotation = (a, k, queries) => {
  Array.from({ length: k }).forEach(() => a.unshift(a.pop()))
  return queries.map((query) => a[query])
}

/**
 * Sequence Equation
 * Problem link: https://www.hackerrank.com/challenges/permutation-equation/problem
 */

export const permutationEquation = (p) => {
  const permutationEquationSequence = []

  for (let i = 1; i <= p.length; i++) {
    permutationEquationSequence.push(p.indexOf(p.indexOf(i) + 1) + 1)
  }

  return permutationEquationSequence
}

/**
 * Migratory Birds
 * Problem link: https://www.hackerrank.com/challenges/migratory-birds/problem
 */

export const migratoryBirds = (arr) => {
  const allBirds = {}
  const mostSighted = []
  const mostCommon = [0, 0]

  arr.forEach((bird) => {
    if (!allBirds[bird]) {
      allBirds[bird] = 1
    } else {
      allBirds[bird]++
    }
    if (allBirds[bird] > mostCommon[1]) {
      mostCommon[0] = bird
      mostCommon[1] = allBirds[bird]
    }
  })

  Object.keys(allBirds).forEach((key) => {
    if (allBirds[key] === mostCommon[1]) {
      mostSighted.push(key)
    }
  })

  mostSighted.sort()

  return parseInt(mostSighted[0])
}

/**
 * Find Digits
 * Problem link: https://www.hackerrank.com/challenges/find-digits/problem
 */

export const findDigits = (n) => {
  const splitToDigit = (number) =>
    number
      .toString()
      .split('')
      .map((digit) => Number(digit))

  let divisors = 0

  splitToDigit(n).map((digit) => {
    if (n % digit === 0) divisors++
  })

  return divisors
}

/**
 * Equalize the Array
 * Problem link: https://www.hackerrank.com/challenges/equality-in-a-array/problem
 */

export const equalizeArray = (arr) => {
  const maxValue = arr.reduce((previous, current, i, arr) => {
    if (
      arr.filter((item) => item === previous).length >
      arr.filter((item) => item === current).length
    ) {
      return previous
    } else {
      return current
    }
  })

  const equalArr = arr.filter((val) => val === maxValue)

  return arr.length - equalArr.length
}

/**
 * Subarray Division
 * Problem link: https://www.hackerrank.com/challenges/the-birthday-bar/problem
 */

export const birthday = (s, d, m) => {
  let matches = 0
  for (let i = 0; i < s.length; i++) {
    let sum = 0
    const slice = s.slice(i, i + m)
    sum = slice.reduce((a, v) => a + v)
    if (sum === d && slice.length === m) matches += 1
  }
  return matches
}

/**
 * Sales by Match
 * Problem link: https://www.hackerrank.com/challenges/sock-merchant/problem
 */

export const sockMerchant = (n, ar) => {
  let pairs = 0

  while (ar.length > 0) {
    const typedSocksArray = ar.filter((sock) => sock === ar[0])
    ar = ar.filter((sock) => sock !== ar[0])
    if (typedSocksArray.length > 1) {
      if (typedSocksArray.length % 2 === 0) pairs += typedSocksArray.length / 2
      else pairs += (typedSocksArray.length - 1) / 2
    }
  }

  return pairs
}

/**
 * Drawing Book
 * Problem link: https://www.hackerrank.com/challenges/drawing-book/problem
 */

export const pageCount = (n, p) => {
  const d = (n % 2 === 0 ? ++n : n) - p
  return Math.floor((d > n / 2 ? p : d) / 2)
}

/**
 * Jumping on the Clouds: Revisited
 * Problem link: https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
 */

export const jumpingOnClouds = (c, k) => {
  let e = 100
  let currentPosition
  let i = 0

  while (currentPosition !== 0) {
    currentPosition = (i + k) % c.length
    const currentCloud = c[currentPosition]
    if (currentCloud === 1) e -= 3
    else e -= 1
    i += k
  }

  return e
}

/**
 * Library Fine
 * Problem link: https://www.hackerrank.com/challenges/library-fine/problem
 */

export const libraryFine = (d1, m1, y1, d2, m2, y2) => {
  if (y1 === y2 && m1 === m2 && d1 > d2) return 15 * (d1 - d2)
  else if (y1 === y2 && m1 > m2) return 500 * (m1 - m2)
  else if (y1 > y2) return 10000
  else if (y1 <= y2 || m1 <= m2 || d1 <= d2) return 0
}

/**
 * Minimum Distances
 * Problem link: https://www.hackerrank.com/challenges/minimum-distances/problem
 */

export const minimumDistances = (a) => {
  let indexesToPass = []
  const distances = []
  for (let i = 0; i < a.length; i++) {
    if (indexesToPass.indexOf(i) === -1) {
      const indexes = []
      const element = a[i]
      let id = a.indexOf(element)
      while (id !== -1) {
        indexes.push(id)
        indexesToPass = indexesToPass.concat(indexes)
        id = a.indexOf(element, id + 1)
      }
      if (indexes.length > 1) {
        const currentDistance = indexes.reduce(
          (acc, el) => Math.abs(acc - el),
          0
        )
        distances.push(currentDistance)
      }
    }
  }

  return distances.length ? Math.min(...distances) : -1
}

/**
 * Encryption
 * Problem link: https://www.hackerrank.com/challenges/encryption/problem
 */

export const encryption = (s) => {
  const n = s.length
  const sqrt = Math.sqrt(n)
  let floor = Math.floor(sqrt)
  const ceil = Math.ceil(sqrt)
  while (floor * ceil < n) floor += 1

  const slices = []
  let j = 0
  let k = ceil
  for (let i = 0; i < floor; i++) {
    slices.push(s.slice(j, k))
    j += ceil
    k += ceil
  }

  const words = []
  for (let i = 0; i < ceil; i++) {
    words.push(slices.map((word) => (word[i] ? word[i] : '')).join(''))
  }

  return words.join(' ')
}

/**
 * Modified Kaprekar Numbers
 * Problem link: https://www.hackerrank.com/challenges/kaprekar-numbers/problem
 */

export const kaprekarNumbers = (p, q) => {
  const results = []
  for (let i = p; i <= q; i++) {
    const d = i.toString().length
    const sqrNArr = (i * i).toString().split('')
    const r = parseInt(sqrNArr.slice(-d).reduceRight((str, acc) => (acc += str), ''))
    const l = parseInt(sqrNArr.slice(0, sqrNArr.length - d).reduceRight((str, acc) => (acc += str), ''))
    if ((isNaN(l) && r === i) || (r + l === i)) results.push(i)
  }
  if (results.length === 0) {
    console.log('INVALID RANGE')
    return null
  }
  return results.join(' ')
}

/**
 * CamelCase
 * Problem link: https://www.hackerrank.com/challenges/camelcase/problem
 */

export const camelcase = (s) => {
  let count = 1
  for (const idx in s) {
    if (s.charAt(idx) === s.charAt(idx).toUpperCase()) count++
  }
  return count
}

/**
 * Super reduced string
 * Problem link: https://www.hackerrank.com/challenges/reduced-string/problem
 */

export const superReducedString = (s) => {
  const values = [...s].reduce((target, item) => {
    if (target.slice(-1)[0] !== item) {
      return [...target, item]
    }

    target.pop(item)

    return target
  }, [])

  return values.length > 0 ? values.join('') : 'Empty String'
}

/**
 * Halloween Sale
 * Problem link: https://www.hackerrank.com/challenges/halloween-sale/problem
 */

export const howManyGames = (p, d, m, s) => {
  let games = 0

  while (s - p >= 0) {
    s = s - p
    games++

    if (p - d >= m) {
      p = p - d
    } else {
      p = m
    }
  }

  return games
}

/**
 * Sherlock and Squares
 * Problem link: https://www.hackerrank.com/challenges/sherlock-and-squares/problem
 */

export const squares = (a, b) => {
  let square = 0
  let i = 1
  let count = 0

  while (square <= b) {
    square = i * i

    if (square >= a && square <= b) {
      count++
    }

    i++
  }

  return count
}

/**
 * Lisa's Workbook
 * Problem link: https://www.hackerrank.com/challenges/lisa-workbook/problem
 */

export const workbook = (n, k, arr) => {
  let specials = 0
  let currentPage = 1
  for (let i = 0; i < n; i++) {
    const problems = Array.from({ length: arr[i] }, (_, i) => i + 1).reduce((result, _, index, array) => {
      if (index % k === 0) result.push(array.slice(index, index + k))
      return result
    }, [])
    for (const problemsSet of problems) {
      problemsSet.includes(currentPage) && specials++
      currentPage++
    }
  }

  return specials
}
