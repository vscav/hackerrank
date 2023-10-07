/**
 * Find Digits
 * https://www.hackerrank.com/challenges/find-digits/problem
 */
export const findDigits = (n) => {
  const splitToDigit = (number) =>
    number
      .toString()
      .split("")
      .map((digit) => Number(digit));

  let divisors = 0;

  splitToDigit(n).map((digit) => {
    if (n % digit === 0) divisors++;
  });

  return divisors;
};
