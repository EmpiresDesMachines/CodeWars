/*
Given two words, how many letters do you have to remove from them to make them anagrams?
Example
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10
Hints
A word is an anagram of another word if they have the same letters (usually in a different order).
Do not worry about case. All inputs will be lowercase.
When you're done with this kata, check out its big brother/sister : https://www.codewars.com/kata/hardcore-anagram-difference
*/

function anagramDifference(w1, w2) {
  const obj1 = {};
  const obj2 = {};
  w1.split("").forEach((v) => (obj1[v] = (obj1[v] || 0) + 1));
  w2.split("").forEach((v) => (obj2[v] = (obj2[v] || 0) + 1));

  const keys = [...new Set(Object.keys(obj1).concat(Object.keys(obj2)))];

  return keys.reduce(
    (acc, v) => acc + Math.abs((obj1[v] || 0) - (obj2[v] || 0)),
    0,
  );
}
