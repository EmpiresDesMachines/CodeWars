/*
Find the sum of the digits of all the numbers from 1 to N (both ends included).
Examples

# N = 4
1 + 2 + 3 + 4 = 10

# N = 10
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

# N = 12
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

*/

function twistedSum(n) {
  return Array(n).fill().map((_, i) => ++i).reduce((acc, n) => {
    if (n < 10) return acc + n;
    n = n.toString().split('').map(Number).reduce((acc, n) => acc + n, 0);
    return acc + n;
  }, 0);
}