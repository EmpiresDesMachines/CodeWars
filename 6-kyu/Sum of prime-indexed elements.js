/*
In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.

Good luck!

If you like this Kata, try:

Dominant primes. It takes this idea a step further.

Consonant value
*/

function total(arr) {
  return arr.filter((e, i) => isPrime(i)).reduce((a, b) => a + b, 0);
}

const isPrime = n => {
  for (let i = 2; i <= n / 2; i++) if (!(n % i)) return false;
  return n > 1;
};