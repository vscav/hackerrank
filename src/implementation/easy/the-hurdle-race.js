/**
 * The Hurdle Race
 * https://www.hackerrank.com/challenges/the-hurdle-race/problem
 */
export const hurdleRace = (k, height) => {
  return Math.max(Math.max(...height) - k, 0);
};
