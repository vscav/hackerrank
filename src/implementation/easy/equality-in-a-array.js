/**
 * Equalize the Array
 * https://www.hackerrank.com/challenges/equality-in-a-array/problem
 */
export const equalizeArray = (arr) => {
  const maxValue = arr.reduce((previous, current, i, arr) => {
    if (
      arr.filter((item) => item === previous).length >
      arr.filter((item) => item === current).length
    ) {
      return previous;
    } else {
      return current;
    }
  });

  const equalArr = arr.filter((val) => val === maxValue);

  return arr.length - equalArr.length;
};
