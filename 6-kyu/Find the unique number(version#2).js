/*
Write a function called findUnique which returns the only unique number from an array.

All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.
Example

Input:

[ 1, 8, 4, 4, 6, 1, 8 ]

Expected output:

6

*/

/* O(n) + O(n)
function findUnique(numbers) {
  const hash = {};

  for (let i = 0; i < numbers.length; i++) {
    const curr = numbers[i];
    hash[curr] = (hash[curr] || 0) + 1;
  }

  for (let [key, value] of Object.entries(hash)) {
    if ( value === 1) return +key;
  }

}
*/

/* O(nlogn) + O(n)
function findUnique(numbers) {
  numbers = numbers.sort((a, b) => a - b);

  for (let i = 0; i < numbers.length; i+=2) {
    if (numbers[i] !== numbers[i + 1]) return (numbers[i]);
  }
}
*/

/* O(n) */
function findUnique(numbers) {
  let res = 0;

  for (const num of numbers) {
    res ^= num;
  }

  return res;
}