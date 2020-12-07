/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

    the second and the last letter is switched (e.g. Hello becomes Holle)
    the first letter is replaced by its character code (e.g. H becomes 72)

Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

const findNums = (w) => +w.match(/[0-9]/g).join('');

function decipherThis(str) {
  return str.split(' ').map(word => {
    const first = String.fromCharCode(findNums(word));
    word = word.replace(/[0-9]/g, '');
    word = first + word;
    if (word.length < 3) return word;
    return word[0] + word.slice(-1) + word.slice(2, -1) + word.slice(1, 2);
  }).join(' ');
}