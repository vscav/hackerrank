/**
 * Super reduced string
 * https://www.hackerrank.com/challenges/reduced-string/problem
 */
export const superReducedString = (s) => {
  const values = [...s].reduce((target, item) => {
    if (target.slice(-1)[0] !== item) {
      return [...target, item];
    }

    target.pop(item);

    return target;
  }, []);

  return values.length > 0 ? values.join("") : "Empty String";
};
