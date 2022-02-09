/* 
Task
Given an initial string s, switch case of the minimal possible number of letters to make the whole string written in the upper case or in the lower case.

Input/Output
[input] string s

String of odd length consisting of English letters.

3 ≤ inputString.length ≤ 99.

[output] a string

The resulting string.

Example
For s = "Aba", the output should be "aba"

For s = "ABa", the output should be "ABA"
*/

function caseUnification(s) {
  const upper = s.split('').reduce((sum, v) => sum + /[A-Z]/.test(v), 0);
  return upper >= s.length - upper ? s.toUpperCase() : s.toLowerCase();
}
