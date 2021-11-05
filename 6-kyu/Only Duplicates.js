/*
Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"

*/

function onlyDuplicates(str) {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    const reg = new RegExp(str[i], 'g');
    if (str.match(reg).length > 1) res += str[i];
  }

  return res;
}