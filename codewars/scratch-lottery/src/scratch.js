// https://www.codewars.com/kata/simple-fun-number-321-scratch-lottery-ii/train/javascript
var scratch = function (lottery) {
    var gains = [];
    var tickets = lottery.reduce(function (acc, curr) {
        acc.push(curr.split(' '));
        return acc;
    }, []);
    var x = '###';
    tickets.forEach(function (el) {
        console.log('el', el);
        var set = new Set(el);
        if (set.size === 3) {
            // all elements are differents
            gains.push(0);
        }
        else if (el[3] === x) {
            // gain is covered, max possible is 10000
            gains.push(10000);
        }
        else {
            gains.push(parseInt(el[3], 10));
        }
    });
    console.log(tickets);
    return gains.reduce(function (acc, curr) { return acc + curr; }, 0);
};
module.exports = scratch;
