/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For this kata, single digit numbers will not be considered numerical palindromes.

For a given number num, write a function to test if the number contains a numerical palindrome or not and return a boolean (true if it does and false if does not). Return "Not valid" if the input is not an integer or is less than 0.

Note: Palindromes should be found without permutating num.

palindrome(5) => false
palindrome(1221) => true
palindrome(141221001) => true
palindrome(1215) => true
palindrome(1294) => false
palindrome("109982") => "Not valid"

In Haskell, this returns a Maybe Bool, with Nothing for an input less than zero.
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
  if ((num ^ 0) !== num || num < 0) return 'Not valid';
  if (num < 10) return false;

  num = num.toString();

  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (check(num, i, j + 1)) return true;
    }
  }

  return false;
}
