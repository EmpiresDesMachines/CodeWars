/*
Pig latin is created by taking all the consonants before the first vowel of a word and moving them to the back of the word followed by the letters "ay".

"hello" => "ellohay"
"creating" => "eatingcray"

If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.

"algorithm" => "algorithmway"

This problem is different from other variations in that it expects casing to remain the same so:

"Hello World" => "Ellohay Orldway"

as well as punctuation.

"Pizza? Yes please!" => "Izzapay? Esyay easeplay!"

Your job is to take a string and translate it to Pig Latin. The string will never be undefined but may contain both numbers and letters. A word will never be a combination of numbers and letters. Also, there will never be punctuation at the beginning of a word and the only capital letter in a word will be the first letter meaning there are zero all capitalized words.

*/

function translate(sentence) {
  return sentence.split(' ').map((word) => {
    let isCapital = false;
    let isFirstVowel = false;
    let cache = '';

    if (word[0] === word[0].toUpperCase()) isCapital = true;
    if (/[auioe]/.test(word[0].toLowerCase())) isFirstVowel = true;

    for (let i = 0; i < word.length; i++) {
      if (/[auioe]/.test(word[0].toLowerCase())) break;
      word = word.slice(1) + word[0];
    }

    for (let i = 0; i < word.length; i++) {
      if (word[i] === '!' || word[i] === '?' || word[i] === '.') {
        cache += word[i];
      }
    }

    if (isCapital) {
      word = word[0].toUpperCase() + word.slice(1).toLowerCase();
    }

    return word.replace(/[\?\!\.]/g, '') + (isFirstVowel ? 'way' : 'ay') + cache;
  }).join(' ');
}