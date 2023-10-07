/**
 * Sherlock and Squares
 * https://www.hackerrank.com/challenges/sherlock-and-squares/problem
 */
export const squares = (a, b) => {
  let square = 0;
  let i = 1;
  let count = 0;

  while (square <= b) {
    square = i * i;

    if (square >= a && square <= b) {
      count++;
    }

    i++;
  }

  return count;
};
