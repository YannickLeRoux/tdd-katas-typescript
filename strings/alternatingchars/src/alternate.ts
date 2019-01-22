function alternatingCharacters(s: string): number {
  const arr: string[] = s.split("");
  let counter: number = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      counter++;
      i--;
    }
  }
  return counter;
}

module.exports = alternatingCharacters;
