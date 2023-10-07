/**
 * Breaking the Records
 * https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
 */

export const breakingRecords = (scores) => {
  let min = 0;
  let max = 0;
  let countMax = 0;
  let countMin = 0;

  scores.forEach((score, index) => {
    if (index === 0) {
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
