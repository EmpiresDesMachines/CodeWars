/*
Write a function that returns the greatest common factor of an array of positive integers. Your return value should be a number, you will only receive positive integers.

greatestCommonFactor([46, 14, 20, 88]); // --> 2
*/

function greatestCommonFactor(array) {
  const arr = array.sort((a, b) => a - b);

  for (let i = arr[arr.length - 1]; i > 0; i--) {
    const check = arr.every(e => !(e % i));
    if (check) {
      return i;
    }
  }
}