/*
Sudoku Background

Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)
Sudoku Solution Validator

Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.
Examples

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false
*/

function validSolution(board) {
  const block0 = board[0][0] + board[0][1] + board[0][2]
    + board[1][0] + board[1][1] + board[1][2]
    + board[2][0] + board[2][1] + board[2][2] === 45;

  const block1 = board[0][3] + board[0][4] + board[0][5]
    + board[1][3] + board[1][4] + board[1][5]
    + board[2][3] + board[2][4] + board[2][5] === 45;

  const block2 = board[0][6] + board[0][7] + board[0][8]
    + board[1][6] + board[1][7] + board[1][8]
    + board[2][6] + board[2][7] + board[2][8] === 45;

  const block3 = board[3][0] + board[3][1] + board[3][2]
    + board[4][0] + board[4][1] + board[4][2]
    + board[5][0] + board[5][1] + board[5][2] === 45;

  const block4 = board[3][3] + board[3][4] + board[3][5]
    + board[4][3] + board[4][4] + board[4][5]
    + board[5][3] + board[5][4] + board[5][5] === 45;

  const block5 = board[3][6] + board[3][7] + board[3][8]
    + board[4][6] + board[4][7] + board[4][8]
    + board[5][6] + board[5][7] + board[5][8] === 45;

  const block6 = board[6][0] + board[6][1] + board[6][2]
    + board[7][0] + board[7][1] + board[7][2]
    + board[8][0] + board[8][1] + board[8][2] === 45;

  const block7 = board[6][3] + board[6][4] + board[6][5]
    + board[7][3] + board[7][4] + board[7][5]
    + board[8][3] + board[8][4] + board[8][5] === 45;

  const block8 = board[6][6] + board[6][7] + board[6][8]
    + board[7][6] + board[7][7] + board[7][8]
    + board[8][6] + board[8][7] + board[8][8] === 45;

  return block0 && block1 && block2 && block3 && block4 && block5 && block6 && block7 && block8;
}