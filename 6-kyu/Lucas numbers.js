/*
Lucas numbers are numbers in a sequence defined like this:

L(0) = 2
L(1) = 1
L(n) = L(n-1) + L(n-2)
Your mission is to complete the function that returns the nth term of this sequence.

Note: It should work for negative numbers as well; how you do this is you flip the equation around, so for negative numbers: L(n) = L(n+2) - L(n+1)

Examples
L(-10) = 123
L(-5)  = -11
L(-1)  =  -1
L(0)   =   2
L(1)   =   1
L(5)   =  11
L(10)  = 123
*/

function lucasnum(n) {
  const arr = [2, 1];
  if (arr[n]) return arr[n];

  for (let i = 2; i <= Math.abs(n); i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[arr.length - 1] * (n < 0 && n % 2 ? -1 : 1);
}
