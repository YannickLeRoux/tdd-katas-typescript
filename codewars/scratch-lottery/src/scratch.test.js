const scratch = require('./scratch.ts');

describe('Scratch', () => {
  it('### tiger tiger 100  return 100', () => {
    expect(scratch(['### tiger tiger 100'])).toBe(100);
  });
  it('rabbit dragon ### 10000 returns 0', () => {
    expect(scratch(['rabbit dragon ### 10000'])).toBe(0);
  });
});
