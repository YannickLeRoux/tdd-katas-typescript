const fizzbuzz = require('./fizzbuzz');

describe('Fizz Buzz Test Suite', () => {
  it('should output an array of correct length', () => {
    expect(fizzbuzz(1,5)).toHaveLength(5);
  });

  it('should return the passed number if not multiple of 3 nor 5', () => {
    expect(fizzbuzz(7,8)).toEqual([7,8]);
  })

  it('should return "Fizz" if mutliple of 3', () => {
    expect(fizzbuzz(3,3)).toEqual(["Fizz"]);
  })

  it('should return "Buzz" if mutliple of 5', () => {
    expect(fizzbuzz(5,5)).toEqual(["Buzz"]);
  })

  it('should return "FizzBuzz" if mutliple of 3 and 5', () => {
    expect(fizzbuzz(15,15)).toEqual(["FizzBuzz"]);
  })

  it('test fizzbuzz for numbers from 1 to 15', () => {
    const expected = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
    expect(fizzbuzz(1,15)).toEqual(expected);
  })
})