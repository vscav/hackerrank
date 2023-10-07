/**
 * Diagonal Difference
 * https://www.hackerrank.com/challenges/diagonal-difference/problem
 */
export const diagonalDifference = (arr) => {
  let diag1 = 0;
  let diag2 = 0;
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    diag1 += arr[i][i];
    diag2 += arr[length - 1 - i][i];
  }

  return Math.abs(diag1 - diag2);
};
