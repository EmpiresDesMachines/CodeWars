/*
Hit the target
given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
There will be only 1 arrow '>' and 1 target 'x'
An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
Examples:
given matrix 4x4:
[

  [' ', ' ', ' ', ' '],

  [' ', ' ', ' ', ' '], --> return true

  [' ', '>', ' ', 'x'],

  [' ', ' ', ' ', ' ']

]
given matrix 4x4:
[

  [' ', ' ', ' ', ' '],

  [' ', '>', ' ', ' '], --> return false

  [' ', ' ', ' ', 'x'],

  [' ', ' ', ' ', ' ']

]
given matrix 4x4:
[

  [' ', ' ', ' ', ' '],

  [' ', 'x', '>', ' '], --> return false

  [' ', '', ' ', ' '],

  [' ', ' ', ' ', ' ']

]

In this example, only a 4x4 matrix was used, the problem will have matrices of dimensions from 2 to 7
Happy hacking as they say!
*/

const solution = (mtrx) => {
  let x = [];
  let arrow = [];

  for (let i = 0; i < mtrx.length; i++) {
    for (let j = 0; j < mtrx.length; j++) {
      if (mtrx[i][j] === "x") x = [i, j];
      if (!!mtrx[i][j].trim() && mtrx[i][j] !== "x")
        (arrow = [i, j]), (type = mtrx[i][j]);
    }
  }

  return x[0] === arrow[0] && x[1] > arrow[1];
};
