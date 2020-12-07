/*
Write a function that takes an array and counts the number of each unique element present.

count(['james', 'james', 'john'])
#=> { 'james': 2, 'john': 1}
*/

function count(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) obj[array[i]] = (obj[array[i]] || 0) + 1;
  return obj;
}