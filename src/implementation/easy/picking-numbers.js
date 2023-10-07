/**
 * Picking Numbers
 * https://www.hackerrank.com/challenges/picking-numbers/problem
 */
export const pickingNumbers = (a) => {
  let maximumLength = 0;

  a.forEach((val) => {
    const currentLength =
      a.filter((curr) => Math.abs(curr - val) <= 1).length - 1;
    maximumLength =
      currentLength >= maximumLength ? currentLength : maximumLength;
  });

  return maximumLength;
};
