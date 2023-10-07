/**
 * Cats and a Mouse
 * https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
 */
export const catAndMouse = (x, y, z) => {
  const a = Math.abs(z - x);
  const b = Math.abs(z - y);

  return a - b === 0 ? "Mouse C" : a < b ? "Cat A" : "Cat B";
};
