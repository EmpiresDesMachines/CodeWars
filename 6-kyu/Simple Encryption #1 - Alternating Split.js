/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

This kata is part of the Simple Encryption Series:

    Simple Encryption #1 - Alternating Split
    Simple Encryption #2 - Index-Difference
    Simple Encryption #3 - Turn The Bits Around
    Simple Encryption #4 - Qwerty

Have fun coding it and please don't forget to vote and rank this kata! :-)

*/

function encrypt(text, n) {
  if (!text || n <= 0) return text;

  const even = text.split("").filter((ch, idx) => !(idx % 2));
  const odd = text.split("").filter((ch, idx) => idx % 2);

  return encrypt([...odd, ...even].join(""), n - 1);
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;

  let str = "";
  const even = encryptedText.slice(0, encryptedText.length / 2);
  const odd = encryptedText.slice(encryptedText.length / 2);

  for (let i = 0; i < encryptedText.length / 2; i++) {
    str += odd[i];
    str += even[i] || "";
  }

  return decrypt(str, n - 1);
}
