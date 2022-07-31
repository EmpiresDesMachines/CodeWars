/*
100th Kata
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.
*/

function mirror(text) {
  let words = text.split(' ');
  const l = Math.max.apply(
    null,
    words.map((v) => v.length),
  );
  words = words.map((v) => '* ' + v.split('').reverse().join('') + ' '.repeat(l - v.length) + ' *');

  return '*'.repeat(l + 4) + '\n' + words.join('\n') + '\n' + '*'.repeat(l + 4);
}
