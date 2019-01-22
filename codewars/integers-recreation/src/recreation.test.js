const recreation = require('./recreation.ts');

describe('Recre', () => {
  it('list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]', () => {
    expect(recreation(1, 250)).toEqual([[1, 1], [42, 2500], [246, 84100]]);
  });

  it('list_squared(1, 1) --> [[1, 1]]', () => {
    expect(recreation(1, 1)).toEqual([[1, 1]]);
  });

  it('list_squared(1, 42) --> [[1, 1], [42,2500]]', () => {
    expect(recreation(1, 42)).toEqual([[1, 1], [42, 2500]]);
  });
});
