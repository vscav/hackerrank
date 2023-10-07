/**
 * Cut the sticks
 * https://www.hackerrank.com/challenges/cut-the-sticks/problem
 */
export const cutTheSticks = (arr) => {
  let sortedArray = arr.sort((a, b) => a - b);

  const operationsCount = [sortedArray.length];

  while (sortedArray.length > 1) {
    const minValue = Math.min.apply(Math, sortedArray);
    sortedArray = sortedArray
      .filter((v) => v !== minValue)
      .map((v) => v - minValue);
    operationsCount.push(sortedArray.length);
  }

  return operationsCount;
};
