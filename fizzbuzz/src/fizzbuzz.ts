const fizzbuzz = (start, end): Array<number|string> => {

  const output: Array<number|string> = [];

  for ( let i: number = start; i <= end; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        output.push("FizzBuzz");
      } else {
        output.push("Fizz");
      }
    } else if (i % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(i);
    }
  }
  return output;
};

module.exports = fizzbuzz;
