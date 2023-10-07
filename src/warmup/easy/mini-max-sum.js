/**
 * Mini-Max Sum
 * https://www.hackerrank.com/challenges/mini-max-sum/problem
 */
export const miniMaxSum = (arr) => {
  arr = arr.sort((a, b) => a - b);
  const min = arr.slice(0, arr.length - 1).reduce((a, b) => a + b);
  const max = arr.slice(1, arr.length).reduce((a, b) => a + b);

  console.log(min, max);
};
