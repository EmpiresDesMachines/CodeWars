/* 
Two strings a and b are called isomorphic if there is a one to one mapping possible for every character of a to every character of b. And all occurrences of every character in a map to same character in b.
Task

In this kata you will create a function that return True if two given strings are isomorphic to each other, and False otherwise. Remember that order is important.

Your solution must be able to handle words with more than 10 characters.
Example

True:

CBAABC DEFFED
XXX YYY
RAMBUNCTIOUSLY THERMODYNAMICS

False:

AB CC
XXY XYY
ABAB CD


*/

function isomorph(a, b) {
  const objA = {};
  const objB = {};

  for (let i = 0; i < a.length; i++) {
    objA[i] = [];
    objB[i] = [];
    const regA = new RegExp(a[i], 'g');
    const regB = new RegExp(b[i], 'g');

    a.replace(regA, (_, idx) => objA[i].push(idx));

    b.replace(regB, (_, idx) => objB[i].push(idx));
  }

  return JSON.stringify(objA) === JSON.stringify(objB);
}
