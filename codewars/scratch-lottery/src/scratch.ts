// https://www.codewars.com/kata/simple-fun-number-321-scratch-lottery-ii/train/javascript

const scratch = (lottery: string[]): number => {
  const gains: number[] = [];

  const tickets = lottery.reduce((acc, curr) => {
    acc.push(curr.split(' '));
    return acc;
  }, []);

  const x: string = '###';

  tickets.forEach(el => {
    console.log('el', el);

    if (el[3] === x && isWinner(el)) {
      gains.push(10000);
    } else if (isWinner(el)) {
      gains.push(parseInt(el[3], 10));
    }
  });

  console.log(tickets, gains);
  return gains.reduce((acc, curr) => acc + curr, 0);
};

const isWinner = ticket => {
  ticket = ticket.slice(0, 3);
  const set = new Set(ticket);
  return set.size < 2 || (set.size < 3 && set.has('###'));
};

module.exports = scratch;
