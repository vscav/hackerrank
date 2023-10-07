/**
 * Compare the Triplets
 * https://www.hackerrank.com/challenges/compare-the-triplets/problem
 */
export const compareTriplets = (a, b) => {
  let ap = 0;
  let bp = 0;

  for (let i = a.length; i-- > 0; ) {
    if (a[i] > b[i]) ap++;
    else if (a[i] < b[i]) bp++;
  }

  return [ap, bp];
};
