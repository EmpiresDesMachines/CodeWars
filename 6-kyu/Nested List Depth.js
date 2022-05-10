/*
A nested list (or array in JavaScript) is a list that apears as a value inside another list,

[item, item, [item, item], item]

in the above list, [item, item] is a nested list.

Your goal is to write a function that determines the depth of the deepest nested list within a given list.
return 1 if there are no nested lists. The list passed to your function can contain any data types.

A few examples:

arrayDepth([true]) // returns 1

arrayDepth([]) // returns 1

arrayDepth([2, "yes", [true, false]]) // returns 2

arrayDepth([1, [2, [3, [4, [5, [6], 5], 4], 3], 2], 1]) // returns 6

arrayDepth([2.0, [2, 0], 3.7, [3, 7], 6.7, [6, 7]]) // returns 2

*/

const calc = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      return 1 + calc(arr[i]);
    }
  }

  return 1;
};

function arrayDepth(arr) {
  let list = [1];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      list.push(calc(arr[i]) + 1);
    }
  }

  return Math.max.apply(null, list);
}
