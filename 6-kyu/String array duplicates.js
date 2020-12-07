/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

    dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

    dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

If you like this Kata, please try:

Alternate capitalization

Vowel consonant lexicon
*/

const dup = s => s.map(e => e.split('').reduce((a, b, i, arr) => (arr[i] !== arr[i + 1] ? a += b : a), ''));