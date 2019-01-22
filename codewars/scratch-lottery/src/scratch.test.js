const scratch = require('./scratch.ts');

describe('Scratch', () => {
  it('### tiger tiger 100  return 100', () => {
    expect(scratch(['### tiger tiger 100'])).toBe(100);
  });
  it('rabbit dragon ### 10000 returns 0', () => {
    expect(scratch(['rabbit dragon ### 10000'])).toBe(0);
  });
  it('test the codewars example', () => {
    expect(
      scratch([
        '### tiger tiger 100',
        'rabbit dragon ### 10000',
        '### ox ### 1000',
        '### ### ### 10',
        'horse monkey rat ###',
        'dog dog dog ###'
      ])
    ).toBe(11110);
  });
  it('test 2nd codewars example', () => {
    expect(
      scratch([
        '### ### ### ###',
        'dog ### ### 10',
        'sheep snake ### ###',
        '### ### rat ###',
        'dragon ### horse ###',
        'sheep horse ox 2000'
      ])
    ).toBe(20010);
  });
});
