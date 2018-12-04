const minimumSwaps = require('./minimum-swaps.ts');

describe('MinimumSwaps', () => {
  it('empty array should return 0 swaps', () => {
    expect(minimumSwaps([])).toBe(0);
  });
  it('[1,2] should return 0 swaps', () => {
    expect(minimumSwaps([1,2])).toBe(0);
  });
  it('[2,1] should return 1 swaps', () => {
    expect(minimumSwaps([2,1])).toBe(1);
  });
  it('[3,2,1] should return 1 swaps', () => {
    expect(minimumSwaps([3,2,1])).toBe(1);
  });
  it('[2,3,1] should return 2 swaps', () => {
    expect(minimumSwaps([2,3,1])).toBe(2);
  });
  it('[4,3,1,2] should return 3 swaps', () => {
    expect(minimumSwaps([4,3,1,2])).toBe(3);
  });
  it('[2,3,4,1,5] should return 3 swaps', () => {
    expect(minimumSwaps([2,3,4,1,5])).toBe(3);
  });
  it('[1,3,5,2,4,6,7] should return 3 swaps', () => {
    expect(minimumSwaps([1,3,5,2,4,6,7])).toBe(3);
  });



})