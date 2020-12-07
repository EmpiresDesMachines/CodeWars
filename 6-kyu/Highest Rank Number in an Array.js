/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

function highestRank(arr) {
  const obj = arr.reduce((obj, el) => {
    obj[el] = (obj[el] || 0) + 1;
    return obj;
  }, {});
  let max = 0;
  let result = '';

  for (const key in obj) {
    if (max <= obj[key]) {
      max = obj[key];
      result = key;
    }
  }
  return +result;
}