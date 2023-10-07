/**
 * Plus Minus
 * https://www.hackerrank.com/challenges/plus-minus/problem
 */

export const plusMinus = (arr) => {
  let p = 0;
  let n = 0;
  let z = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      p++;
    } else if (arr[i] < 0) {
      n++;
    } else {
      z++;
    }
  }

  console.log((p / arr.length).toFixed(6));
  console.log((n / arr.length).toFixed(6));
  console.log((z / arr.length).toFixed(6));
};
