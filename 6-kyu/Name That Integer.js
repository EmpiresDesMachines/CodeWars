/*
Ruby
Write a method detect_int that returns the first positive integer for which an arbitrary number of lambdas returns true. If no arguments are passed in, then detect_int should return 1.

For example:

lam1 = x => x > 9
lam2 = x => x**0.5 % 1 == 0

detect_int()             // => 1
detect_int(lam1)         // => 10
detect_int(lam2)         // => 1
detect_int(lam1,lam2)    // => 16
The testing rubric will never ask for a number that does not exist, like:

detect_int(n=>n%2==1, n=>n%2==0)      // => !??
For examples, see the example test cases.
*/

function detectInt(...args) {
  if (!args.length) return 1;
  for (let i = 1; ; i++) {
    if (args.every((f) => f(i))) return i;
  }
}
