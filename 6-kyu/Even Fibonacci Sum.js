/*
Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the maximum value.

The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

0 1 1 2 3 5 8 13 21...

For example:

fibonacci(0)==0
fibonacci(33)==10
fibonacci(25997544)==19544084

*/

function fibonacci(max) {
  const fib = [0, 1];
  let res = 0;

  while (res < max) {
    const f = fib[0] + fib[1];
    [fib[0], fib[1]] = [fib[1], f];
    if (f >= max) break;
    if (!(f % 2)) res += f;
  }

  return res;
}