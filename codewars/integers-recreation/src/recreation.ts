// www.codewars.com/kata/integers-recreation-one

const recreation = (start, end) => {
  const sqrtDivisors = [];

  for (let num = start; num <= end; num++) {
    const divisors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }

    const divSqrd = divisors.map((el: number) => el * el);

    const sumSquare: number = divSqrd.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);

    const sqrtSum = Math.sqrt(sumSquare);

    if (Number.isInteger(sqrtSum)) {
      sqrtDivisors.push([num, sumSquare]);
    }
  }
  return sqrtDivisors;
};

module.exports = recreation;
