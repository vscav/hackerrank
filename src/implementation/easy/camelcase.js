/**
 * CamelCase
 * https://www.hackerrank.com/challenges/camelcase/problem
 */
export const camelcase = (s) => {
  let count = 1;
  for (const idx in s) {
    if (s.charAt(idx) === s.charAt(idx).toUpperCase()) count++;
  }
  return count;
};
