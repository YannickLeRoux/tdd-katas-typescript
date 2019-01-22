// https://www.hackerrank.com/challenges/max-array-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming

const maxSubsetSum = (arr: number[]) => {
  if (arr.length === 1) {
    return arr[0];
  } else if (arr.length < 4) {
    return arr[0] + arr[arr.length - 1];
  } else {
    const subSum: number[] = [];
    for (let index = 0; index < arr.length - 2; index++) {
      let currentSum: number = arr[index];
      for (let nextI = index + 2; nextI < arr.length; nextI += 2) {
        currentSum += arr[nextI];
        subSum.push(currentSum);
      }
    }
    return Math.max(...subSum);
  }
};

module.exports = maxSubsetSum;
