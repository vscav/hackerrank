/**
 * Simple Array Sum
 * https://www.hackerrank.com/challenges/simple-array-sum/problem
 */
export const simpleArraySum = (ar) => {
  let result = 0;
  ar.forEach((integer) => {
    result += integer;
  });
  return result;
};
