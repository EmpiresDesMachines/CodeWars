/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered

Input strings s1 and s2 are null terminated.

Examples

scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

function scramble(str1, str2) {
  const obj = {};

  for (let i = 0; i < str1.length; i++) {
    obj[str1[i]] = (obj[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (!obj[str2[i]]) return false;
    obj[str2[i]]--;
  }
  return true;
}