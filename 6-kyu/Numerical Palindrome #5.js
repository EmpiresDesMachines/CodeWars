/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

232
110011
54322345
Complete the function to test if the given number (num) can be rearranged to form a numerical palindrome or not. Return a boolean (true if it can be rearranged to a palindrome, and false if it cannot). Return "Not valid" if the input is not an integer or is less than 0.

For this kata, single digit numbers are NOT considered numerical palindromes.

Examples
5        =>  false
2121     =>  true
1331     =>  true
3357665  =>  true
1294     =>  false
"109982" =>  "Not valid"
-42      =>  "Not valid"
Other Kata in this Series:
Numerical Palindrome #1
Numerical Palindrome #1.5
Numerical Palindrome #2
Numerical Palindrome #3
Numerical Palindrome #3.5
Numerical Palindrome #4
Numerical Palindrome #5
*/

const isPalindrome = (n) =>
  n.toString() === n.toString().split('').reverse().join('');

function palindrome(num) {
  if (parseInt(num) !== num || num < 0) return 'Not valid';
  if (num < 10) return false;

  const str = num.toString();

  const obj = {};

  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = (obj[str[i]] || 0) + 1;
  }

  return (Object.values(obj).filter((v) => v % 2) || []).length < 2;
}
