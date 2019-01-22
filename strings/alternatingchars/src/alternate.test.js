const alternatingCharacters = require('./alternate');

describe('Alternating Characters', () => {
  it('should return 0 for ab', () => {
    expect(alternatingCharacters('ab')).toBe(0);
  });
  it('should return 1 for aab', () => {
    expect(alternatingCharacters('aab')).toBe(1);
  });
  it('should return 2 for aabbab', () => {
    expect(alternatingCharacters('aabbab')).toBe(2);
  });
  it('should work fast enough for extra long strings', () => {
    expect(alternatingCharacters('aabbabababbbaabababababababababababababababababaababababaabbaabbbbbabababababababababbababababababaabababababbaabbababababababbabababababbabababbabababbbbbbaaaaaaabababababbabababbaabbabababababbabababbabababababababababbababababbababababababbababababbababababbbbbbababababaabbabaabbabbabbabababbaabbabababababbababababababbababababababbbababbabababbbbababababbababbababbbababbababbababababababbabababbababbaababababababba')).toBe(75);

  })
})