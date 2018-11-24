const plusMinus = require('./plus-minus');

describe('Plus Minus', () => {
  it('should return ["1.000000","0.000000","0.000000"] when arr is [1,1,1,1]', () => {
    expect(plusMinus([1, 1, 1, 1])).toEqual(['1.000000', '0.000000', '0.000000']);
  });

  it('should return ["0.0000000", "0.000000", "1.000000"] when arr is [0,0,0,0]', () => {
    expect(plusMinus([0, 0, 0, 0])).toEqual(['0.000000', '0.000000', '1.000000']);
  });

  it('should return ["0.500000","0.333333","0.166667"] when arr is [-4, 3, -9, 0, 4, 1]', () => {
    expect(plusMinus([-4, 3, -9, 0, 4, 1])).toEqual(['0.500000','0.333333','0.166667']);
  });
});