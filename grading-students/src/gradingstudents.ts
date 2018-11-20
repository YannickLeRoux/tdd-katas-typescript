// https://www.hackerrank.com/challenges/grading/problem

const gradingStudents = (grades: number[]) => {
  const finalGrades: number[] = [];
  for ( let grade of grades ) {
    if ( grade >= 38 ) {
      if ( (grade - 9) % 10 === 0) {
        grade += 1 ;
      } else if ( (grade - 8) % 10 === 0 ) {
        grade += 2;
      } else if ( (grade - 4) % 10 === 0) {
        grade += 1;
      } else if ( (grade - 3) % 10 === 0) {
        grade += 2;
      }
    }
    finalGrades.push(grade);
  }
  return finalGrades;
};

module.exports = gradingStudents;
