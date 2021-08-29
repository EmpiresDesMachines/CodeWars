/*
The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

Example:

fibonacci(4) // should return  [0,1,1,2]
fibonacci(-1) // should return []
*/

function fibonacci(n) {
  if (n <= 0) return [];

  const res = [0, 1];

  for (let i = 2; i < n; i++) {
    res.push(res[i - 2] + res[i - 1]);
  }

  return res;
}