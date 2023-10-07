/**
 * Minimum Distances
 * https://www.hackerrank.com/challenges/minimum-distances/problem
 */
export const minimumDistances = (a) => {
  let indexesToPass = [];
  const distances = [];
  for (let i = 0; i < a.length; i++) {
    if (indexesToPass.indexOf(i) === -1) {
      const indexes = [];
      const element = a[i];
      let id = a.indexOf(element);
      while (id !== -1) {
        indexes.push(id);
        indexesToPass = indexesToPass.concat(indexes);
        id = a.indexOf(element, id + 1);
      }
      if (indexes.length > 1) {
        const currentDistance = indexes.reduce(
          (acc, el) => Math.abs(acc - el),
          0
        );
        distances.push(currentDistance);
      }
    }
  }

  return distances.length ? Math.min(...distances) : -1;
};
