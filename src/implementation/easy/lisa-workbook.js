/**
 * Lisa's Workbook
 * https://www.hackerrank.com/challenges/lisa-workbook/problem
 */
export const workbook = (n, k, arr) => {
  let specials = 0;
  let currentPage = 1;
  for (let i = 0; i < n; i++) {
    const problems = Array.from({ length: arr[i] }, (_, i) => i + 1).reduce(
      (result, _, index, array) => {
        if (index % k === 0) result.push(array.slice(index, index + k));
        return result;
      },
      []
    );
    for (const problemsSet of problems) {
      problemsSet.includes(currentPage) && specials++;
      currentPage++;
    }
  }

  return specials;
};
