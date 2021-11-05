/*
Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

Example:

locate(['a','b',['c','d',['e']]],'e'); // should return true
locate(['a','b',['c','d',['e']]],'a'); // should return true
locate(['a','b',['c','d',['e']]],'f'); // should return false

*/

const locate = function (arr, value) {
  return flat(arr).some(e => e === value);
};

function flat(arr) {
  let flatten = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'object') flatten.push(arr[i]);
    else flatten = flatten.concat(flat(arr[i]));
  }

  return flatten;
}