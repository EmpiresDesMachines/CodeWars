/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/

const removeConsecutiveDuplicates = s => {
  let res = [];
  s = s.split(' ')

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) continue;
    res.push(s[i]);
  }

  return res.join(' ');
}

const removeConsecutiveDuplicates = s => (
  s.split(' ').reduce((acc, w, i, arr) => acc +  (w === arr[i - 1] ? '' : w + ' '), '').slice(0, -1)
)

const removeConsecutiveDuplicates = s => (
  s.split(' ').reduce((acc, w, i, arr) => w === arr[i - 1] ? acc : [...acc, w], []).join(' ')
);