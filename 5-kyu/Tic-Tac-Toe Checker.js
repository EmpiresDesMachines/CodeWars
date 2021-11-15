/*
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]

We want our function to return:

    -1 if the board is not yet finished AND no one has won yet (there are empty spots),
    1 if "X" won,
    2 if "O" won,
    0 if it's a cat's game (i.e. a draw).

You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

*/

function isSolved(board) {
  const [row1, row2, row3] = board;
  const col1 = [row1[0], row2[0], row3[0]];
  const col2 = [row1[1], row2[1], row3[1]];
  const col3 = [row1[2], row2[2], row3[2]];
  const diag1 = [col1[0], col2[1], col3[2]];
  const diag2 = [col3[0], col2[1], col1[2]];
  let hasZero = false;
  const wins = [row1, row2, row3, col1, col2, col3, diag1, diag2];

  for (let i = 0; i < wins.length; i++) {
    const win = wins[i];

    if (!hasZero) {
      hasZero = win.some(n => n === 0);
      if (hasZero) continue;
    }

    if (win.every(x => x === 1)) return 1;
    if (win.every(o => o === 2)) return 2;
  }

  return hasZero ? -1 : 0;
}