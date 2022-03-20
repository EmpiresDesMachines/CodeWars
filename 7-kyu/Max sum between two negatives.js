/*
You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements, or if there is no such sum: -1 for Python, JavaScript and COBOL, Nothing for Haskell.

No negative element should be present in this sum.

Example:

[4, -1, 6, -2, 3, 5, -7, 7] -> 8
     ^      ^         ^
Not 14, because -2 is between -1 and -7, and not 6 but 8, because 8 is bigger.
*/

function maxSumBetweenTwoNegatives(a) {
  let max = -1;
  const arr = a.reduce((acc, v, i) => (v < 0 ? [...acc, i] : acc), []);
  for (let i = 0; i < arr.length - 1; i++) {
    const sub = a.slice(arr[i] + 1, arr[i + 1]).reduce((sum, v) => sum + v, 0);
    max = Math.max(max, sub);
  }

  return max;
}
