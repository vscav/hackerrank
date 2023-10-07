/**
 * Grading Students
 * https://www.hackerrank.com/challenges/grading/problem
 */
export const gradingStudents = (grades) => {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      const m = Math.ceil(grades[i] / 5) * 5;

      if (m - grades[i] < 3) {
        grades[i] = m;
      }
    }
  }

  return grades;
};
