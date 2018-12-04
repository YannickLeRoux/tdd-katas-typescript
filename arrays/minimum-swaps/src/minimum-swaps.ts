// https://www.hackerrank.com/challenges/minimum-swaps-2/

const minimumSwaps = (arr: number[]): number => {
  const target: number[] = [...arr].sort();
  let count: number = 0;
  const arrLength: number = arr.length;

  const map: {} = arr. reduce((acc, cur, i) => {
    acc[cur] = i;
    return acc;
  }, {});

  const sortedMap: {} = target. reduce((acc, cur, i) => {
    acc[cur] = i;
    return acc;
  }, {});

  while ( !checkArraysEqual(arr, target)) {
    // create a map of indexes to avoid to long computation

    // loop over array
    for ( let i = 0; i < arrLength; i++) {
      let rightPointer = arrLength - 1;
    // if  arr[i] equal the value of arr[i] + 1, let's move forward no count
      if ( arr[i] === i + 1 ) {
        i++;
      } else {
        // if not, let the right pointer search the value
        while ( arr[rightPointer] !== i + 1 ) {
          rightPointer--;
        }
        // once retrieved, swap
        arr = swap(arr, i, rightPointer);

        // increase count
        count++;
      }
    }
  }

  return count;
};

const checkArraysEqual = (arr1, arr2) => {
  if ( typeof arr1 !== typeof arr2 || arr1.length !== arr2.length ) {
    return false;
  }
  for ( let i = 0; i < arr1.length - 1 ; i++ ) {
    if ( arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const swap = (arr: number[], a: number, b: number): number[] => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;

}

module.exports = minimumSwaps;
