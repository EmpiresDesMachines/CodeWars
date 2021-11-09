/*
Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true

Arguments consist of only lowercase letters.

*/

function isAlt(word) {
  const seq = /[aeiou]/.test(word[0]);

  const even = word.split('').filter((_, i) => !(i % 2)).join('');
  const odd = word.split('').filter((_, i) => i % 2).join('');

  return seq
    ? !even.replace(/[aeiou]/g, '').length && odd.length == odd.replace(/[aeiou]/g, '').length
    : !odd.replace(/[aeiou]/g, '').length && even.length == even.replace(/[aeiou]/g, '').length;
}