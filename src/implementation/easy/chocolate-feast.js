/**
 * Chocolate Feast
 * https://www.hackerrank.com/challenges/chocolate-feast/problem
 */
export const chocolateFeast = (n, c, m) => {
  let candy = Math.floor(n / c);
  let wrapper = candy;
  let result = candy;
  while (wrapper >= m) {
    const exchanged = Math.floor(wrapper / m);
    wrapper = wrapper - exchanged * m + exchanged;
    result += exchanged;
  }
  return result;
};
