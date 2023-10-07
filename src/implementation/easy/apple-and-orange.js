/**
 * Apple and Orange
 * https://www.hackerrank.com/challenges/apple-and-orange/problem
 */
export const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  console.log(apples.reduce((sum, d) => sum + (s - a <= d && d <= t - a), 0));
  console.log(oranges.reduce((sum, d) => sum + (s - b <= d && d <= t - b), 0));
};
