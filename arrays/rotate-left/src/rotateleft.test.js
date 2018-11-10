const rotateLeft = require('./rotateleft');

describe('Rotate Left', () => {
  it(' input and output should be an array of same length', () => {
    expect(rotateLeft([1,2,3,4], 2)).toHaveLength(4)
  })

  it('[1,2] should be [2,1] if rotated once', () => {
    expect(rotateLeft([1,2], 1)).toEqual([2,1]);
  });

  it('[1,2,3] should be [2,3,1] if rotated once', () => {
    expect(rotateLeft([1,2,3], 1)).toEqual([2,3,1]);
  });

  it('[1,2,3] should be [3,1,2] if rotated twice', () => {
    expect(rotateLeft([1,2,3], 2)).toEqual([3,1,2]);
  });

  it('output should be the same as input if d = array.length', () => {
    expect(rotateLeft([1,2,3], 3)).toEqual([1,2,3]);
    expect(rotateLeft([1,2,3,4], 4)).toEqual([1,2,3,4]);
    expect(rotateLeft([1,2,3,4,5], 5)).toEqual([1,2,3,4,5]);
  });

  it('[1,2,3] should be [2,3,1] if rotated four time', () => {
    expect(rotateLeft([1,2,3], 4)).toEqual([2,3,1]);
  });
})