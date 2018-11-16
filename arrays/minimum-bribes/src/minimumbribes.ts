const minimumBribes = (arr: number[]) => {

  const input: {} = {};

  for ( let i: number = 0; i < arr.length; i++) {
    input[ i + 1 ] =  i;
  }

  const output: {} = arr.reduce( (obj: {}, curr: number) => {
    obj[curr] = arr.indexOf(curr);
    return obj;
  }, {});

  console.log(input);
  console.log(output);

  for ( let num of Object.keys(output) ) {
    if ( Math.abs(output[num] - input[num]) > 2 ) {
      return "Too chaotic";
    }
  }

  let diff: number = 0;

  for ( let num of Object.keys(output) ) {
    diff += Math.abs(output[num] - input[num]);
    console.log(diff);
  }
  // tslint:disable-next-line:no-console
  return diff / 2;
}

module.exports = minimumBribes;