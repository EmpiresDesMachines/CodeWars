/*
You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.
*/

function arraySum(arr) {
  return arr.reduce(
    (acc, v) =>
      acc +
      (typeof v === "number" ? v : typeof v === "object" ? arraySum(v) : 0),
    0,
  );
}
