/**
 * Encryption
 * https://www.hackerrank.com/challenges/encryption/problem
 */
export const encryption = (s) => {
  const n = s.length;
  const sqrt = Math.sqrt(n);
  let floor = Math.floor(sqrt);
  const ceil = Math.ceil(sqrt);
  while (floor * ceil < n) floor += 1;

  const slices = [];
  let j = 0;
  let k = ceil;
  for (let i = 0; i < floor; i++) {
    slices.push(s.slice(j, k));
    j += ceil;
    k += ceil;
  }

  const words = [];
  for (let i = 0; i < ceil; i++) {
    words.push(slices.map((word) => (word[i] ? word[i] : "")).join(""));
  }

  return words.join(" ");
};
