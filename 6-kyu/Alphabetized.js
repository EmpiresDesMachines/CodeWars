/*
The alphabetized kata

Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:

alphabetized("The Holy Bible") // "BbeehHilloTy"

Inspired by Tauba Auerbach

*/

function alphabetized(s) {
  let res = '';
  const str = s.replace(/[^a-zA-Z]/g, '');

  for (let i = 97; i <= 123; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[j].toLowerCase().charCodeAt() === i) res += str[j];
    }
  }

  return res;
}