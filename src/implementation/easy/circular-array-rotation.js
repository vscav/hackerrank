/**
 * Circular Array Rotation
 * https://www.hackerrank.com/challenges/circular-array-rotation/problem
 */
export const circularArrayRotation = (a, k, queries) => {
  Array.from({ length: k }).forEach(() => a.unshift(a.pop()));
  return queries.map((query) => a[query]);
};
