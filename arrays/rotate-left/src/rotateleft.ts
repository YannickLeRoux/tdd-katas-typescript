/*
* input params: arr(array of int), d(int, number of left rotations)
* output params:rotated array
*/


const rotateLeft = (arr: number[], d: number): number[] => {

  for ( let i = 0; i < d; i++) {
    const first = arr.shift();
    arr.push(first);
  }

  return arr;

};

module.exports = rotateLeft;
