/*
Complete the function which accepts a string and return an array of character(s) that have the most spaces to their right and left.

Notes:

the string can have leading/trailing spaces - you should not count them
the strings contain only unique characters from a to z
the order of characters in the returned array doesn't matter
Examples
"a b  c"                        -->  ["b"]
"a bcs           d k"           -->  ["d"]
"    a b  sc     p     t   k"   -->  ["p"]
"a  b  c  de"                   -->  ["b", "c"]
"     a  b  c de        "       -->  ["b"]
"abc"                           -->  ["a", "b", "c"]
Good luck!
*/

function loneliest(str) {
  str = str.trim();
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    if (/ /.test(str[i])) continue;
    const reg = new RegExp(' *' + str[i] + ' *');
    arr.push([str[i], str.match(reg)[0].length]);
  }

  const max = Math.max.apply(
    null,
    arr.map((v) => v[1]),
  );

  return arr.filter((v) => v[1] === max).map((v) => v[0]);
}
