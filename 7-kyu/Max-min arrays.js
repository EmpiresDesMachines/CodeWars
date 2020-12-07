/*
n this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]

The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.

Good luck!
*/

function solve(arr) {
  arr = arr.sort((a, b) => a - b);
  const rez = [];
  while (arr.length) {
    if (arr.length > 1) {
      rez.push(arr.pop());
      rez.push(arr.shift());
    } else {
      rez.push(arr.pop());
    }
  }

  return rez;
}