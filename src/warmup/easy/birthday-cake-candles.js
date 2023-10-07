/**
 * Birthday Cake Candles
 * https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 */
export const birthdayCakeCandles = (ar) => {
  const max = Math.max(...ar);
  return ar.filter((v) => v === max).length;
};
