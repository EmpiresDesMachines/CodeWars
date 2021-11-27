/*
Create a function that takes an argument n and sums even Fibonacci numbers up to n's index in the Fibonacci sequence.

Example:

sumFibs(5) === 2 // (0, 1, 1, 2, 3, 5);2 is the only even number in the sequence and doesn't have another number in the sequence to get added to in the indexed Fibonacci sequence.

Example:

sumFibs(9) === 44; // (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
// 2 + 8 + 34 = 44;

*/

function sumFibs(n) {
  const fib = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }

  return fib.reduce((acc, m) => (!(m % 2) ? acc + m : acc), 0);
}