/**
 * Sequence Equation
 * https://www.hackerrank.com/challenges/permutation-equation/problem
 */
export const permutationEquation = (p) => {
  const permutationEquationSequence = [];

  for (let i = 1; i <= p.length; i++) {
    permutationEquationSequence.push(p.indexOf(p.indexOf(i) + 1) + 1);
  }

  return permutationEquationSequence;
};
