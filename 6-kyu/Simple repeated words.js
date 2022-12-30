/*
In this Kata, you will count the number of times the first string occurs in the second.

solve("zaz","zazapulz") = 4 because they are ZAZapulz, ZAzapulZ, ZazApulZ, zaZApulZ
More examples in test cases.

Good luck!

Please also try Simple time difference
*/

const solve = (a, b) =>
  !a
    ? 1
    : b
        .split('')
        .reduce((acc, v, i) => acc + (v == a[0] ? solve(a.slice(1), b.slice(i + 1)) : 0), 0);
