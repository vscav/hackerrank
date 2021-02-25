/**
 * Grading Students
 * Problem link: https://www.hackerrank.com/challenges/grading/problem
 */

export const gradingStudents = (grades) => {
  for (var i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      let m = Math.ceil(grades[i] / 5) * 5;

      if (m - grades[i] < 3) {
        grades[i] = m;
      }
    }
  }

  return grades;
};

/**
 * Apple and Orange
 * Problem link: https://www.hackerrank.com/challenges/apple-and-orange/problem
 */

export const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  console.log(apples.reduce((sum, d) => sum + (s - a <= d && d <= t - a), 0));
  console.log(oranges.reduce((sum, d) => sum + (s - b <= d && d <= t - b), 0));
};

/**
 * Number Line Jumps
 * Problem link: https://www.hackerrank.com/challenges/kangaroo/problem
 */

export const kangaroo = (x1, v1, x2, v2) => {
  if ((x1 - x2) % (v2 - v1) === 0 && !(x2 > x1 && v2 > v1)) return "YES";
  else return "NO";
};

/**
 * Breaking the Records
 * Problem link: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
 */

export const breakingRecords = (scores) => {
  let min = 0,
    max = 0,
    countMax = 0,
    countMin = 0;

  scores.forEach((score, index) => {
    if (index == 0) {
      max = score;
      min = score;
    } else {
      if (score > max) {
        max = score;
        countMax++;
      }
      if (score < min) {
        min = score;
        countMin++;
      }
    }
  });

  return [countMax, countMin];
};

/**
 * Divisible Sum Pairs
 * Problem link: https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
 */

export const divisibleSumPairs = (n, k, ar) => {
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((ar[i] + ar[j]) % k === 0) res += 1;
    }
  }
  return res;
};

/**
 * Bill Division
 * Problem link: https://www.hackerrank.com/challenges/bon-appetit/problem
 */

export const bonAppetit = (bill, k, b) => {
  let actual = 0,
    charged = b;
  if (k >= 0 && k < bill.length) {
    bill.forEach((value, index) => {
      if (index != k) actual += value;
    });
  }
  actual = actual / 2;
  console.log(actual == charged ? "Bon Appetit" : charged - actual);
};

/**
 * Electronics Shop
 * Problem link: hackerrank.com/challenges/electronics-shop/problem
 */

export const getMoneySpent = (keyboards, drives, b) => {
  const comparison = (a, b) => a - b;
  keyboards.sort(comparison);
  drives.sort(comparison);
  let res = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      const currentPair = keyboards[i] + drives[j];
      if (currentPair <= b && currentPair > res) res = currentPair;
    }
  }
  return res;
};

/**
 * Cats and a Mouse
 * Problem link: https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
 */

export const catAndMouse = (x, y, z) => {
  let a = Math.abs(z - x),
    b = Math.abs(z - y);

  return a - b == 0 ? "Mouse C" : a < b ? "Cat A" : "Cat B";
};

/**
 * The Hurdle Race
 * Problem link: https://www.hackerrank.com/challenges/the-hurdle-race/problem
 */

export const hurdleRace = (k, height) => {
  return Math.max(Math.max(...height) - k, 0);
};

/**
 * Designer PDF Viewer
 * Problem link: https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
 */

export const designerPdfViewer = (h, word) => {
  let alphabet = [
    { key: "a", height: 0 },
    { key: "b", height: 0 },
    { key: "c", height: 0 },
    { key: "d", height: 0 },
    { key: "e", height: 0 },
    { key: "f", height: 0 },
    { key: "g", height: 0 },
    { key: "h", height: 0 },
    { key: "i", height: 0 },
    { key: "j", height: 0 },
    { key: "k", height: 0 },
    { key: "l", height: 0 },
    { key: "m", height: 0 },
    { key: "n", height: 0 },
    { key: "o", height: 0 },
    { key: "p", height: 0 },
    { key: "q", height: 0 },
    { key: "r", height: 0 },
    { key: "s", height: 0 },
    { key: "t", height: 0 },
    { key: "u", height: 0 },
    { key: "v", height: 0 },
    { key: "w", height: 0 },
    { key: "x", height: 0 },
    { key: "y", height: 0 },
    { key: "z", height: 0 },
  ];

  alphabet.forEach((letter, i) => {
    letter.height = h[i];
  });

  const heightMap = alphabet.reduce((map, obj) => {
    map[obj.key] = obj.height;
    return map;
  }, {});

  let tallestLetter = 0;
  for (const letter of word) {
    if (heightMap[letter] > tallestLetter) tallestLetter = heightMap[letter];
  }

  return word.length * tallestLetter;
};
