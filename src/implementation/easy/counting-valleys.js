/**
 * Counting Valleys
 * https://www.hackerrank.com/challenges/counting-valleys/problem
 */
export const countingValleys = (steps, path) => {
  let strArr = path.split("");
  let count = 0;
  let result = 0;

  for (let step = 0; step < steps; step++) {
    if (count == 0 && strArr[step].toLowerCase() == "d") {
      count--;
      result++;
    } else if (strArr[step].toLowerCase() == "d") {
      count--;
    } else {
      count++;
    }
  }

  return result;
};
