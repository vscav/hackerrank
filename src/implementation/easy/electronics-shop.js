/**
 * Electronics Shop
 * hackerrank.com/challenges/electronics-shop/problem
 */
export const getMoneySpent = (keyboards, drives, b) => {
  const comparison = (a, b) => a - b;
  keyboards.sort(comparison);
  drives.sort(comparison);
  let res = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      const currentPair = keyboards[i] + drives[j];
      if (currentPair <= b && currentPair > res) res = currentPair;
    }
  }
  return res;
};
