/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message) {
  const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
}

/*
function rot13(message) {
  const indent = 13;
  let rot13 = '';
  for (let i = 0; i < message.length; i++) {
    const currentCharacter = message.charCodeAt(i);
    if (currentCharacter >= 97 && currentCharacter <= 122) { // lower case
      rot13 += String.fromCharCode((currentCharacter - 97 + indent) % 26 + 97);
    } else if (currentCharacter >= 65 && currentCharacter <= 90) { // upper case
      rot13 += String.fromCharCode((currentCharacter - 65 + indent) % 26 + 65);
    } else { // another symbol
      rot13 += String.fromCharCode(currentCharacter);
    }
  }
  return rot13;
}
*/