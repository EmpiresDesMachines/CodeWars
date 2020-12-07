/*
Acknowledgments:

I thank yvonne-liu for the idea and for the example tests :)
Description:

Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

    Your message is a string containing space separated words.
    You need to encrypt each word in the message using the following rules:
        The first letter needs to be converted to its ASCII code.
        The second letter needs to be switched with the last letter
    Keepin' it simple: There are no special characters in input.

Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

const encryptThis = function (text) {
  return text.split(' ').map(e => {
    e = e.split('');
    e[0] = e[0].charCodeAt(0);
    const first = e[1];
    const last = e[e.length - 1];
    e[1] = last;
    e[e.length - 1] = first;
    return e.join('');
  }).join(' ');
};