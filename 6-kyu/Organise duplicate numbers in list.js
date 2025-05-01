/*
Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile. Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.

Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain:

group([3, 2, 6, 2, 1, 3])
>>> [[3, 3], [2, 2], [6], [1]]
Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array should be returned.
*/

//v.1
function group(arr) {
  return Object.entries(
    arr.reduce(
      (acc, v, i) =>
        acc[v]
          ? ((acc[v].count += 1), acc)
          : { ...acc, [v]: { count: 1, ind: i } },
      {},
    ),
  )
    .sort((a, b) => a[1].ind - b[1].ind)
    .map((v) => Array(v[1].count).fill(+v[0]));
}

//v.2
const group = (arr) =>
  [...new Set(arr)].map((v) =>
    Array(arr.filter((x) => x === v).length).fill(v),
  );
