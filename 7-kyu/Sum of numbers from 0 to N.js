/*
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.
Example:
Input:
> 6
Output:
    0+1+2+3+4+5+6 = 21
Input:
> -15
Output:
    -15<0
Input:
> 0
Output:
    0=0
*/

const SequenceSum = (function () {
  function SequenceSum() {}
  SequenceSum.showSequence = function (count) {
    if (count === 0) return '0=0';
    if (count < 0) return `${count}<0`;
    const arr = Array.from({ length: count + 1 }, (_, i) => i++);
    return `${arr.join('+')} = ${arr.reduce((a, b) => a + b, 0)}`;
  };

  return SequenceSum;
}());