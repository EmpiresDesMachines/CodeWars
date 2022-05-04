/*
Hit the target
This is the second part of the kata :3 🎈🎆🎇🎆🎈
given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
Now there are one of 4 types of arrows ( '^', '>', 'v', '<' ) and only one target (x)
An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
Examples:
given matrix 4x4:
[

  [' ', 'x', ' ', ' '],

  [' ', ' ', ' ', ' '], --> return true

  [' ', '^', ' ', ' '],

  [' ', ' ', ' ', ' ']

]
given matrix 4x4:
[

  [' ', ' ', ' ', ' '],

  [' ', 'v', ' ', ' '], --> return false

  [' ', ' ', ' ', 'x'],

  [' ', ' ', ' ', ' ']

]
given matrix 4x4:
[

  [' ', ' ', ' ', ' '],

  ['>', ' ', ' ', 'x'], --> return true

  [' ', '', ' ', ' '],

  [' ', ' ', ' ', ' ']

]

In this example, only a 4x4 matrix was used, the problem will have matrices of dimensions from 2 to 7
And here is the first part of this kata - click me ●v●
Happy hacking as they say! 💻
*/

const solution = (mtrx) => {
  let x = [];
  let type = "";
  let arrow = [];

  for (let i = 0; i < mtrx.length; i++) {
    for (let j = 0; j < mtrx.length; j++) {
      if (mtrx[i][j] === "x") x = [i, j];
      if (!!mtrx[i][j].trim() && mtrx[i][j] !== "x")
        (arrow = [i, j]), (type = mtrx[i][j]);
    }
  }

  if (type === ">") return x[0] === arrow[0] && x[1] > arrow[1];

  if (type === "<") return x[0] === arrow[0] && x[1] < arrow[1];

  if (type === "^") return x[1] === arrow[1] && x[0] < arrow[0];

  if (type === "v") return x[1] === arrow[1] && x[0] > arrow[0];
};
