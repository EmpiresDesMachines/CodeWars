/*
Task
You are given a string s that consists of English letters and brackets. It is guaranteed that the brackets in s form a regular bracket sequence.

Your task is to reverse the strings in each pair of matching brackets, starting from the innermost one step by step(remove the brackets at the same time).

Example
For s = "a(bc)de" the output should be "acbde".

Input/Output
[input] string s

A string consisting of English letters, punctuation marks, whitespace characters and brackets. It is guaranteed that parenthesis form a regular bracket sequence.

Constraints: 5 ≤ x.length ≤ 100.

[output] a string
*/

function reverseParentheses(s) {
  while (s.match(/\)/)) {
    const r = s.match(/\([a-zA-z]+\)/)[0];
    s = s.replace(r, (r) => r.slice(1, -1).split('').reverse().join(''));
  }

  return s;
}
