/*
Please write a function that will take a string as input and return a hash. The string will be formatted as such. The key will always be a symbol and the value will always be an integer.

"a=1, b=2, c=3, d=4"

This string should return a hash that looks like

{ 'a': 1, 'b': 2, 'c': 3, 'd': 4}

*/

function strToHash(str) {
  const obj = {};
  if (!str) return obj;
  const arr = str.split(', ').forEach(s => {
    s = s.split('=');
    obj[s[0]] = Number(s[1]);
  });

  return obj;
}