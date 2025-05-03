/*
In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!
*/

function reverseVowels(str) {
  let vowels = str.match(/[aeiou]/gi);
  return str.split``.map((v) => (v.match(/[aeiou]/i) ? vowels.pop() : v))
    .join``;
}
