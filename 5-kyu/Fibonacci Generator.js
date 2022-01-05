/*
Create a function generator genfib() that returns a function fib() which always returns the next fibonacci number on each invocation (and returns 0 when being called the first time).

Example:

var fib = genfib();
fib(); // -> returns 0
fib(); // -> returns 1
fib(); // -> returns 1
fib(); // -> returns 2

*/

function genfib() {
  const arr = [0, 1];
  let count = 0;
  return function fib() {
    if (arr[count] === undefined) {
      arr[arr.length] = arr[count - 1] + arr[count - 2];
    }
    const res = arr[count];
    count++;

    return res;
  };
}