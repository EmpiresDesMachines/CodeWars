/*
Consider the following expansion:

solve("3(ab)") = "ababab"     -- because "ab" repeats 3 times
solve("2(a3(b))") = "abbbabbb" -- because "a3(b)" == "abbb", which repeats twice.

Given a string, return the expansion of that string.

Input will consist of only lowercase letters and numbers (1 to 9) in valid parenthesis. There will be no letters or numbers after the last closing parenthesis.

More examples in test cases.

Good luck!

Please also try Simple time difference

*/

function solve(str) {
  str = str.replace(/[()]/g, '');
  let s = '';

  for (let i = str.length - 1; i >= 0; i--) {
    if (/[a-z]/.test(str[i])) s += str[i];
    if (/\d/.test(str[i])) s = s.repeat(str[i]);
  }

  return s.split('').reverse().join('');
}