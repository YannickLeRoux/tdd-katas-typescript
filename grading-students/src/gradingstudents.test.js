const gradingStudents = require('./gradingstudents');

describe('Grading Students', () => {
  it(' one grade under 38 should return just the same grade', () => {
    expect(gradingStudents([33])).toEqual([33]);
  });

  it(' two grades under 38 should return just the same 2 grades in array', () => {
    expect(gradingStudents([33, 02])).toEqual([33, 02]);
  });

  it('[43] should return [45]', () => {
    expect(gradingStudents([43])).toEqual([45]);
  });

  it(' [73, 67, 38, 33] should return [75, 67, 40, 33]', () => {
    expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);

  })


});