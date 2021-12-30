/*
Create a function called shortcut to remove all the lowercase vowels in a given string.
Examples

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

Don't worry about uppercase vowels.

*/

const shortcut = (str) => str.replace(/[aeiou]/g, '');