/*
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.

This is the second kata in series:

    Find the unique number
    Find the unique string (this kata)
    Find The Unique
*/

function findUniq(arr) {
  const newArr = arr.map((el) => [...new Set(el.toLowerCase())].sort().join(''));
  for (let i = 0; i < newArr.length; i++) {
    if (newArr.indexOf(newArr[i]) === newArr.lastIndexOf(newArr[i])) return arr[i];
  }
}