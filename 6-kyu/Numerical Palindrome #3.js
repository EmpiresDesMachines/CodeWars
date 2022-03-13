/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, write a function which returns the number of numerical palindromes within each number. For this kata, single digit numbers will NOT be considered numerical palindromes.

Return "Not valid" if the input is not an integer or is less than 0.

palindrome(5) => 0
palindrome(1221) => 2
palindrome(141221001) => 5
palindrome(1294) => 0
palindrome("1221") => "Not valid"
Other Kata in this Series:
Numerical Palindrome #1
Numerical Palindrome #1.5
Numerical Palindrome #2
Numerical Palindrome #3
Numerical Palindrome #3.5
Numerical Palindrome #4
Numerical Palindrome #5
*/

const check = (num, start, end) => {
  num = num.slice(start, end);
  return num === num.split('').reverse().join('') && num.length > 1;
};

function palindrome(num) {
  let count = 0;
  if ((num ^ 0) !== num || num < 0) return 'Not valid';
  if (num < 10) return count;

  num = num.toString();

  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (check(num, i, j + 1)) count++;
    }
  }

  return count;
}
