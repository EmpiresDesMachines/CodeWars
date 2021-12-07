/*
Given an integer n return "odd" if the number of its divisors is odd. Otherwise return "even".

Note: big inputs will be tested.
Examples:

All prime numbers have exactly two divisors (hence "even").

For n = 12 the divisors are [1, 2, 3, 4, 6, 12] – "even".

For n = 4 the divisors are [1, 2, 4] – "odd".

*/

function oddity(n) {
  let c = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      c += Math.floor(n / i) === i ? 1 : 2;
    }
  }

  return c % 2 ? 'odd' : 'even';
}