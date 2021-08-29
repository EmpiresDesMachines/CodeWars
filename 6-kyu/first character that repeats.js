/*
Find the first character that repeats in a String and return that character.

firstDup('tweet') => 't'
firstDup('like') => undefined
This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.
*/

function firstDup(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) !== s.lastIndexOf(s[i])) {
      return s[i];
    }
  }

  return undefined;
}