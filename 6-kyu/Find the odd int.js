/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

function findOdd(A) {
  if (A.length === 1) return A[0];
  const obj = {};
  for (let i = 0; i < A.length; i++) {
    (!obj.hasOwnProperty(A[i])) ? obj[A[i]] = 1 : obj[A[i]] = obj[A[i]] + 1;
  }
  for (const key in obj) {
    if (obj[key] % 2 === 1) return Number(key);
  }
}