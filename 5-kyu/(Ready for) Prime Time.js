/*
We need prime numbers and we need them now!

Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

For example:

prime(11);

Should return an array that looks like this:

[2, 3, 5, 7, 11]
*/

function prime(num) {
  return Array.from({ length: num }, () => num--).filter(a => isPrime(a)).reverse();
}

const isPrime = n => {
  for (let i = 2; i <= n / 2; i++) if (!(n % i)) return false;
  return n > 1;
};