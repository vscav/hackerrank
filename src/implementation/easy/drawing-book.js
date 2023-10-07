/**
 * Drawing Book
 * https://www.hackerrank.com/challenges/drawing-book/problem
 */
export const pageCount = (n, p) => {
  const d = (n % 2 === 0 ? ++n : n) - p;
  return Math.floor((d > n / 2 ? p : d) / 2);
};
