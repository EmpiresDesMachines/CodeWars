/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, write a function to test if it's a numerical palindrome or not and return a boolean (true if it is and false if not).

Return "Not valid" if the input is not an integer or less than 0.

Other Kata in this Series:
Numerical Palindrome #1
Numerical Palindrome #1.5
Numerical Palindrome #2
Numerical Palindrome #3
Numerical Palindrome #3.5
Numerical Palindrome #4
Numerical Palindrome #5
*/

function palindrome(num) {
  if ((String(num).match(/[^\d]/g) || []).length || typeof num === 'string')
    return 'Not valid';
  num = num.toString();

  for (let i = 0; i < num.toString().length / 2; i++) {
    if (num[i] !== num[num.length - i - 1]) return false;
  }

  return true;
}
