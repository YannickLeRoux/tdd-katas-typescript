// https://www.codewars.com/kata/simple-fun-number-321-scratch-lottery-ii/train/javascript

const scratch = (lottery: string[]): number => {
  const gains: number[] = [];

  const split = lottery.reduce((acc, curr) => {
    acc.push(curr.split(' '));
    return acc;
  }, []);

  split.forEach(el => gains.push(parseInt(el[3], 10)));

  console.log(split);
  return gains.reduce((acc, curr) => acc + curr, 0);
};
module.exports = scratch;
