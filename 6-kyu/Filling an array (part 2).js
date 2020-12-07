/*
Following on from Part 1, part 2 looks at some more complicated array contents.

So let's try filling an array with...
...square numbers

The numbers from 1 to n*n

const squares = n => ???
squares(5) // [1, 4, 9, 16, 25]

...a range of numbers

A range of numbers starting from start and increasing by step

const range = (n, start, step) => ???
range(6, 3, 2) // [3, 5, 7, 9, 11, 13]

...random numbers

A bunch of random integers between min and max

const random = (n, min, max) => ???
random(4, 5, 10) // [5, 9, 10, 7]

...prime numbers

All primes starting from 2 (obviously)...

const primes = n => ???
primes(6) // [2, 3, 5, 7, 11, 13]

HOTE: All the above functions should take as their first parameter a number that determines the length of the returned array.
*/

const squares = n => Array.from({ length: n }, (_, i) => (i + 1) * (i + 1));

const range = (n, start, step) => Array.from({ length: n }, (e, i) => (i === 0 ? start : start += step));

const random = (n, min, max) => Array.from({ length: n }, e => Math.round(Math.random() * (max - min) + min));

const primes = n => generatePrimes(n);

const isPrime = n => {
  for (let i = 2; i <= n / 2; i++) if (n % i === 0) return false;
  return true;
};

const generatePrimes = num => {
  const arr = [];
  let i = 2;
  while (arr.length < num) {
    if (isPrime(i)) arr.push(i);
    i = i === 2 ? i + 1 : i + 2;
  }
  return arr;
};