/*
Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False

        --> ['a','b','d']

'DIGEST'--> ['D','I','E','T']

All input will be valid strings of length > 0. Leading zeros in binary should not be counted.

*/

function moreZeros(s) {
  const arr = [...new Set(s)];

  return arr
    .map(a => a.charCodeAt(0).toString(2))
    .map((a, i) => ((a.match(/0/g) || []).length > (a.match(/1/g) || []).length ? arr[i] : null))
    .filter(x => x);
}