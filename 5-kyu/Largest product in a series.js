/*
Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

For example:

greatestProduct("123834539327238239583") // should return 3240

The input string always has more than five digits.

Adapted from Project Euler.
*/

function greatestProduct(s) {
  let max = 0;
  for (let i = 4; i < s.length; i++) max = Math.max(max, s[i - 4] * s[i - 3] * s[i - 2] * s[i - 1] * s[i]);
  return max;
}