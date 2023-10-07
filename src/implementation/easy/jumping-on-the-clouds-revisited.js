/**
 * Jumping on the Clouds: Revisited
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem
 */

export const jumpingOnClouds = (c, k) => {
  let e = 100;
  let currentPosition;
  let i = 0;

  while (currentPosition !== 0) {
    currentPosition = (i + k) % c.length;
    const currentCloud = c[currentPosition];
    if (currentCloud === 1) e -= 3;
    else e -= 1;
    i += k;
  }

  return e;
};
