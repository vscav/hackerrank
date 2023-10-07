/**
 * Halloween Sale
 * https://www.hackerrank.com/challenges/halloween-sale/problem
 */
export const howManyGames = (p, d, m, s) => {
  let games = 0;

  while (s - p >= 0) {
    s = s - p;
    games++;

    if (p - d >= m) {
      p = p - d;
    } else {
      p = m;
    }
  }

  return games;
};
