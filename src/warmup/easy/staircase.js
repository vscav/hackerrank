/**
 * Staircase
 * https://www.hackerrank.com/challenges/staircase/problem
 */
export const staircase = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
};
