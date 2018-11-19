const minMaxSum = (arr: number[]): number[] => {

  const sumTotal: number = arr.reduce( (total, current) => {
    total += current;
    return total;
  }, 0);

  const possibleResults: number[] = [];
  for ( let num of arr ) {
    possibleResults.push(sumTotal - num);
  }
  return [Math.min(...possibleResults), Math.max(...possibleResults)];
};

module.exports = minMaxSum;
