/**
 * Modified Kaprekar Numbers
 * https://www.hackerrank.com/challenges/kaprekar-numbers/problem
 */
export const kaprekarNumbers = (p, q) => {
  const results = [];
  for (let i = p; i <= q; i++) {
    const d = i.toString().length;
    const sqrNArr = (i * i).toString().split("");
    const r = parseInt(
      sqrNArr.slice(-d).reduceRight((str, acc) => (acc += str), "")
    );
    const l = parseInt(
      sqrNArr
        .slice(0, sqrNArr.length - d)
        .reduceRight((str, acc) => (acc += str), "")
    );
    if ((isNaN(l) && r === i) || r + l === i) results.push(i);
  }
  if (results.length === 0) {
    console.log("INVALID RANGE");
    return null;
  }
  return results.join(" ");
};
