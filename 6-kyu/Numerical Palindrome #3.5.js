/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are: 2332, 110011, 54322345

For a given number num, write a function which returns an array of all the numerical palindromes contained within each number. The array should be sorted in ascending order and any duplicates should be removed.

In this kata, single digit numbers and numbers which start or end with zeros (such as 010 and 00) are NOT considered valid numerical palindromes.

If num contains no valid palindromes, return "No palindromes found". Otherwise, return "Not valid" if the input is not an integer or is less than 0.

Examples
palindrome(1221)      =>  [22, 1221]
palindrome(34322122)  =>  [22, 212, 343, 22122]
palindrome(1001331)   =>  [33, 1001, 1331]
palindrome(1294)      =>  "No palindromes found"
palindrome("1221")    =>  "Not valid"
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
  return num === num.split('').reverse().join('') && num.length > 1
    ? num
    : false;
};

function palindrome(num) {
  let palindrimes = [];
  if ((num ^ 0) !== num || num < 0) return 'Not valid';
  if (num < 10) return 'No palindromes found';

  num = num.toString();

  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      const val = check(num, i, j + 1);
      if (val) palindrimes.push(val);
    }
  }

  palindrimes = [...new Set(palindrimes)]
    .filter((v) => !/^0/.test(v))
    .map(Number)
    .sort((a, b) => a - b);

  return palindrimes.length ? palindrimes : 'No palindromes found';
}
