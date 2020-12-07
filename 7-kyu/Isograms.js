/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
*/

function isIsogram(str) {
  str = str.toLowerCase();
  const obj = {};
  for (let i = 0; i < str.length; i++) obj[str[i]] = (obj[str[i]] || 0) + 1;
  for (const key in obj) if (obj[key] > 1) return false;
  return true;
}