const makeAnagrams = require('./anagrams');

describe('MAke Anagrams', () => {
  it('should return 0 with 2 empty strings', () => {
    expect(makeAnagrams('','')).toBe(0);
  });
  it('should return 0 with 2 same strings', () => {
    expect(makeAnagrams('ab','ab')).toBe(0);
  });
  it('should return 1 with ab and abc', () => {
    expect(makeAnagrams('ab','abc')).toBe(1);
  });
  it('should return 3 with ad and abc', () => {
    expect(makeAnagrams('ad','abc')).toBe(3);
  });
  it('should return four', () => {
    expect(makeAnagrams('xyzab','abc')).toBe(4);
  });
  it('should return 30', () => {
    expect(makeAnagrams('fcrxzwscanmligyxyvym','jxwtrhvujlmrpdoqbisbwhmgpmeoke')).toBe(30);
  });

})