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
