/**
 * Sales by Match
 * https://www.hackerrank.com/challenges/sock-merchant/problem
 */
export const sockMerchant = (n, ar) => {
  let pairs = 0;

  while (ar.length > 0) {
    const typedSocksArray = ar.filter((sock) => sock === ar[0]);
    ar = ar.filter((sock) => sock !== ar[0]);
    if (typedSocksArray.length > 1) {
      if (typedSocksArray.length % 2 === 0) pairs += typedSocksArray.length / 2;
      else pairs += (typedSocksArray.length - 1) / 2;
    }
  }

  return pairs;
};
