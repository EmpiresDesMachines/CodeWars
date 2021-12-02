/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

*/

const factorial = (n) => new Array(n).fill().map((_, i) => ++i).reduce((acc, n) => acc * n, 1);