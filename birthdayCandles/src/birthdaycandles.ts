// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

const birthdayCakeCandles = (ar: number[]): number => {

  const maxValue = Math.max(...ar);

  let counter = 0;

  for ( let num of ar ) {
    if ( num === maxValue ) {
      counter++;
    }
  }

  return counter;

};

module.exports = birthdayCakeCandles;
