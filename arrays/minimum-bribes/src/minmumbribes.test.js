const minimumBribes = require('./minimumbribes');

describe('Minimum Bribes', () => {

  it('should print too chaotic', () => {
    expect(minimumBribes([2,5,1,3,4])).toEqual("Too chaotic");
  });

  it('should print 3 ', () => {
    expect(minimumBribes([2,1,5,3,4])).toBe(3)
  });

  it('should print ? ', () => {
    expect(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])).toBe(3)
  });

  it('should print ?? ', () => {
    expect(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])).toBe(3)
  });
})