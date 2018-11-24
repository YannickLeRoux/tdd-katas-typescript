// https://www.hackerrank.com/challenges/plus-minus/problem

const plusMinus = (arr: number[]) => {
  let positive: number = 0;
  let negative: number = 0;
  let zeros: number = 0;

  for ( let num of arr ) {
    if ( num > 0) {
      positive++;
    } else if ( num < 0 ) {
      negative++;
    } else {
      zeros++;
    }
  }

  return [
    roundSix(positive / arr.length),
    roundSix(negative / arr.length),
    roundSix(zeros / arr.length),
  ];
};

const roundSix = (num: number) => {
  let res: string = num.toFixed(6);

  return res;
};

module.exports = plusMinus;