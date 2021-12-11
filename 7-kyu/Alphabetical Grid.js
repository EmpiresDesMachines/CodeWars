/*
Task:

You need to write a function grid that returns an alphabetical grid of size NxN, where a = 0, b = 1, c = 2....
Examples:

grid(4)

a b c d
b c d e
c d e f
d e f g

grid(10)

a b c d e f g h i j
b c d e f g h i j k
c d e f g h i j k l
d e f g h i j k l m
e f g h i j k l m n
f g h i j k l m n o
g h i j k l m n o p
h i j k l m n o p q
i j k l m n o p q r
j k l m n o p q r s

Notes:

    After "z" comes "a"
    If function receive N < 0 should return:

    null

*/

function grid(n) {
  if (n < 0) return null;
  const res = [];
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  if (n + n - 1 > alphabet.length) {
    alphabet = alphabet.repeat(Math.ceil(n + n - 1 / alphabet.length));
  }

  for (let i = 0; i < n; i++) {
    res.push(alphabet.slice(i, n + i));
  }

  return res.map((v) => v.split('').join(' ')).join('\n');
}