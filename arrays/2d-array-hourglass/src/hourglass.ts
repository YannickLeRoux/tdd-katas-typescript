// https://www.hackerrank.com/challenges/2d-array

const hourglassSum = (arr: number[][]): number => {
  const total: number[] = [];

  for (let i: number = 0; i < (arr.length - 2); i++) {
    for (let j: number = 0; j < (arr.length - 2); j++) {
      total.push(oneHourglassSum(arr, i, j));
    }
  }
  return Math.max(...total);
};

// calculate the sum of one hourglass
const oneHourglassSum = (arr: number[][], row: number, column: number): number  => {

  return (
    arr[row][column] +
    arr[row][column + 1] +
    arr[row][column + 2] +
    arr[row + 1][column + 1] +
    arr[row + 2][column] +
    arr[row + 2 ][column + 1] +
    arr[row + 2][column + 2]
    ) ;
};

module.exports = hourglassSum;
