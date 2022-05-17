/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
Strings
Fundamentals
*/

const findLongest = (array) =>
  array.reduce((acc, v) =>
    acc.toString().length >= v.toString().length ? acc : v
  );
