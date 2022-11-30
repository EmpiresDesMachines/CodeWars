/*
Easy; Make a box
Given a number as a parameter (between 2 and 30), return an array containing strings which form a box.
Like this:

n = 5

[
  '-----',
  '-   -',
  '-   -',
  '-   -',
  '-----'
]
n = 3

[
  '---',
  '- -',
  '---'
]

*/

function box(n) {
  return ['-'.repeat(n), ...new Array(n - 2).fill(`-${' '.repeat(n - 2)}-`), '-'.repeat(n)];
}
