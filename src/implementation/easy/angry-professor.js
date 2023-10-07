/**
 * Angry Professor
 * https://www.hackerrank.com/challenges/angry-professor/problem
 */
export const angryProfessor = (k, a) => {
  for (let i = a.length; i-- > 0; ) {
    if (a[i] <= 0) {
      --k;
    }
  }

  return k <= 0 ? "NO" : "YES";
};
