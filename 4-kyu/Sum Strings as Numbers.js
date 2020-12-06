/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

function sumStrings(a, b) {
  const first = Array.from(a, Number);
  const second = Array.from(b, Number);
  let max = Math.max(first.length, second.length) + 1;

  let inMind = 0;
  const result = [];

  while (max--) {
    const currentSum = (first.pop() || 0) + (second.pop() || 0) + inMind;
    inMind = 0;
    result.unshift(currentSum % 10);
    inMind = Math.floor(currentSum / 10);
  }

  return result.join('').replace(/^0+/, '');
}