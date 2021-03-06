/*
A prime number is an integer greater than 1 that is only evenly divisible by itself and 1.

Write your own Primes class with class method Primes.first(n) that returns an array of the first n prime numbers.

For example:

Primes.first(1)
# => [2]

Primes.first(2)
# => [2, 3]

Primes.first(5)
# => [2, 3, 5, 7, 11]

Primes.first(20).last(5)
# => [53, 59, 61, 67, 71]

Note: An inefficient algorithm will time out. Memoization may help.

More info on primes here.
*/

const Primes = {

  first(n) {
    const arr = [];
    let i = 2;
    while (n > 0) {
      if (this.isPrime(i)) {
        arr.push(i);
        n--;
      }
      i++;
    }
    return arr;
  },

  isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
    return n > 1;
  },

};