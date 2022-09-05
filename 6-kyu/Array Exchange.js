/*
Array Exchange and Reversing

It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed.

// before
const myArray = ['a', 'b', 'c'];
const otherArray = [1, 2, 3];

exchangeWith(myArray, otherArray);

// after
myArray => [3, 2, 1]
otherArray => ['c', 'b', 'a']
*/

// You need to modify the contents of existing arrays a and b inside the function,
// and not assign references to new arrays by these variables (parameters).
function exchangeWith(a, b) {
  let tempA = [...a].reverse();
  let tempB = [...b].reverse();

  while (a.length) a.pop();
  while (b.length) b.pop();

  for (let i = 0; i < tempB.length; i++) a.push(tempB[i]);
  for (let i = 0; i < tempA.length; i++) b.push(tempA[i]);
}
