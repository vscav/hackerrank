/**
 * Strange Counter
 * https://www.hackerrank.com/challenges/strange-code/problem
 */
export const strangeCounter = (t) => {
  let time = 3;

  while (true) {
    t -= time;

    if (t <= 0) {
      t += time;
      return time - t + 1;
    }

    time *= 2;
  }
};
