/**
 * Number Line Jumps
 * https://www.hackerrank.com/challenges/kangaroo/problem
 */
export const kangaroo = (x1, v1, x2, v2) => {
  if ((x1 - x2) % (v2 - v1) === 0 && !(x2 > x1 && v2 > v1)) return "YES";
  else return "NO";
};
