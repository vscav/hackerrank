/**
 * Viral Advertising
 * https://www.hackerrank.com/challenges/strange-advertising/problem
 */
export const viralAdvertising = (n) => {
  let shared = 5;
  let liked = 0;
  let cumulative = 0;

  for (let i = 0; i < n; i++) {
    liked = Math.floor(shared / 2);
    shared = liked * 3;
    cumulative += liked;
  }

  return cumulative;
};
