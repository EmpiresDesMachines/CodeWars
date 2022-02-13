/* 
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

const isPalindrome = (x) => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
