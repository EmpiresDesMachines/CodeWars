/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

function encode(string) {
  return string.replace(/(a|e|i|o|u)/g, s => {
    if (s === 'a') return 1;
    if (s === 'e') return 2;
    if (s === 'i') return 3;
    if (s === 'o') return 4;
    if (s === 'u') return 5;
  });
}

function decode(string) {
  return string.replace(/[1-5]/g, s => {
    if (s === '1') return 'a';
    if (s === '2') return 'e';
    if (s === '3') return 'i';
    if (s === '4') return 'o';
    if (s === '5') return 'u';
  });
}