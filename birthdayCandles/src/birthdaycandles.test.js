const birthdayCakeCandle = require('./birthdaycandles');

describe('Birthday Cake Candles', () => {
  it('1 year old, should return 1 candle blown', () => {
    expect(birthdayCakeCandle([1])).toBe(1);
  });

  it('2 year old, should return 1 candle blown', () => {
    expect(birthdayCakeCandle([4,2])).toBe(1);
  });

  it('3 years old, should blow 2 highest candles', () => {
    expect(birthdayCakeCandle([4,4,2])).toBe(2);
  });

  it('5 years old, should blow 2 highest candles', () => {
      expect(birthdayCakeCandle([4,4,2,1,2])).toBe(2);
  });

})