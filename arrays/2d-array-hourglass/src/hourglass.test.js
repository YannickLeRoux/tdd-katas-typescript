const hourglassSum = require('./hourglass.ts');

describe('HourGlass', () => {
  it('[[1,1,1,], [0,1,0], [1,1,1]] should return 7', () => {
    const arr = [[1,1,1,], [0,1,0], [1,1,1]]
    expect(hourglassSum(arr)).toBe(7);
  });

  it('[[2,2,2,], [0,2,0], [2,2,2]] should return 14', () => {
    const arr = [[2,2,2,], [0,2,0], [2,2,2]]
    expect(hourglassSum(arr)).toBe(14);
  });

  it('test with 6x6 grid', () => {
    const arr = [
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 2, 4, 4, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 1, 2, 4, 0]
    ];
    expect(hourglassSum(arr)).toBe(19);
  })
})