/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL if any of the values aren't numbers.
*/

function cubeOdd(arr) {
  return arr.length && !arr.filter(e => typeof e === 'string').length
    ? arr.map(a => a ** 3).filter(a => a % 2 !== 0).reduce((a, b) => a + b)
    : undefined;
}