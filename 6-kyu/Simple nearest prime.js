/*
In this Kata, you will be given a number and your task will be to return the nearest prime number.

solve(4) = 3. The nearest primes are 3 and 5. If difference is equal, pick the lower one.
solve(125) = 127

We'll be testing for numbers up to 1E10. 500 tests.

More examples in test cases.

Good luck!

If you like Prime Katas, you will enjoy this Kata: Simple Prime Streaming
*/

const solve = n => {
  let nn = n;
  while (true) {
    if (isPrime(n--)) return n + 1;
    if (isPrime(nn++)) return nn - 1;
  }
};

const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};