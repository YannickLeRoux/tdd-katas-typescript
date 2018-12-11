const makeAnagrams = (a: string, b: string): number => {
  if ( a === b ) {
    return 0;
  }

  const mapA: {} = a.split('').reduce((acc, curr) => {
    acc[curr] ? acc[curr] += 1 : acc[curr] = 1;
    return acc;
  }, {});

  const mapB: {} = b.split('').reduce((acc, curr) => {
    acc[curr] ? acc[curr] += 1 : acc[curr] = 1;
    return acc;
  }, {});

  console.log(mapA, mapB);

  let counter: number = 0;

  for ( let el in mapA ) {
    if (!mapB[el]) {
      counter += mapA[el];
    } else {
      counter += Math.abs(mapA[el] - mapB[el]);
    }
  }

  for ( let el in mapB ) {
    if (!mapA[el]) {
      counter += mapB[el];
    }
  }

  return counter;

};

module.exports = makeAnagrams;
