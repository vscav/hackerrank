/**
 * Save the Prisoner!
 * https://www.hackerrank.com/challenges/save-the-prisoner/problem
 */
export const saveThePrisoner = (n, m, s) => {
  return (m - 1 + s) % n || n;
};
