/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

const pigIt = (str) => str.split(' ').map((word) => (word.match(/[\W]/) ? word : `${word.slice(1) + word.slice(0, 1)}ay`)).join(' ');