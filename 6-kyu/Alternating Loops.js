/*
Write

function combine()
that combines arrays by alternatingly taking elements passed to it.

E.g

combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
Arrays can have different lengths.
*/

const combine = (...args) =>
  new Array(Math.max(...args.map((v) => v.length)))
    .fill()
    .reduce((acc, v, i) => acc.concat(...args.map((v) => v[i])), [])
    .filter(Boolean);
