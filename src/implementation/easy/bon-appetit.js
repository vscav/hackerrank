/**
 * Bill Division
 * https://www.hackerrank.com/challenges/bon-appetit/problem
 */
export const bonAppetit = (bill, k, b) => {
  let actual = 0;
  const charged = b;
  if (k >= 0 && k < bill.length) {
    bill.forEach((value, index) => {
      if (index !== k) actual += value;
    });
  }
  actual = actual / 2;
  console.log(actual === charged ? "Bon Appetit" : charged - actual);
};
