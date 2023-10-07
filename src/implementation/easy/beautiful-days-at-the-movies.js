/**
 * Beautiful Days at the Movies
 * https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
 */
export const beautifulDays = (i, j, k) => {
  const numberedDays = [];
  for (let l = i; l <= j; l++) {
    numberedDays.push(l);
  }

  const reverse = (num) =>
    parseInt(String(num).split("").reverse().join(""), 10);

  return numberedDays
    .map((numberedDay) => numberedDay - reverse(numberedDay))
    .filter((numberedDay) => Number.isInteger(numberedDay / k)).length;
};
