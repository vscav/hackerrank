/**
 * Subarray Division
 * https://www.hackerrank.com/challenges/the-birthday-bar/problem
 */
export const birthday = (s, d, m) => {
  let matches = 0;
  for (let i = 0; i < s.length; i++) {
    let sum = 0;
    const slice = s.slice(i, i + m);
    sum = slice.reduce((a, v) => a + v);
    if (sum === d && slice.length === m) matches += 1;
  }
  return matches;
};
