/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  x = x.split(' ');
  const arr = x.map(s => s.split('').map(s => s.charCodeAt() - 96));
  let max = 0;
  let idx = 0;
  arr.forEach((e, i) => {
    const sum = e.reduce((a, b) => a + b);
    if (sum > max) {
      max = sum;
      idx = i;
    }
  });
  return x[idx];
}