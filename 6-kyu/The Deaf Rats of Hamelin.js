/*
Story
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats
ex2 P O~ O~ ~O O~ has 1 deaf rat
ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*/

const countDeafRats = function (town) {
  let deaf = 0;
  const t = town.replace(/\s/g, '').replace(/(P)/, '$1$1');
  const arr = [];

  for (let i = 0; i < t.length; i += 2) arr.push(t.slice(i, i + 2));

  const piedPiper = arr.indexOf('PP');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '~O' && i > piedPiper) deaf++;
    if (arr[i] === 'O~' && i < piedPiper) deaf++;
  }

  return deaf;
};