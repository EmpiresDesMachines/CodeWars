/*
Write a function that takes an array/list of numbers and returns a number.

See the examples and try to guess the pattern:

EvenOdd([1,2,6,1,6,3,1,9,6]) => 393
EvenOdd([1,2,3]) => 5
EvenOdd([0,2,3]) => 3
EvenOdd([1,0,3]) => 3
EvenOdd([3,2])   => 6

*/

const EvenOdd = (arr) =>
  arr.reduce(
    (acc, v, idx) =>
      idx % 2 ? acc * v : acc + v,
    0,
  );
