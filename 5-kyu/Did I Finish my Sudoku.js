/*
Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

Sudoku rules:

Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

Rows:

There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.

In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.

Columns:

There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.

In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.

Regions

A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.

Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.

In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.

Valid board example:

For those who don't know the game, here are some information about rules and how to play Sudoku: http://en.wikipedia.org/wiki/Sudoku and http://www.sudokuessentials.com/
*/

function doneOrNot(board) {
  const horizontalValidate = !board.map((e) => e.reduce((a, b) => a + b, 0)).filter((e) => e !== 45).length;

  let col0 = 0;
  let col1 = 0;
  let col2 = 0;
  let col3 = 0;
  let col4 = 0;
  let col5 = 0;
  let col6 = 0;
  let col7 = 0;
  let
    col8 = 0;
  for (let i = 0; i < board.length; i++) {
    col0 += board[i][0];
    col1 += board[i][1];
    col2 += board[i][2];
    col3 += board[i][3];
    col4 += board[i][4];
    col5 += board[i][5];
    col6 += board[i][6];
    col7 += board[i][7];
    col8 += board[i][8];
  }
  const verticalValidate = (col0 === 45 && col1 === 45 && col2 === 45
    && col3 === 45 && col4 === 45 && col5 === 45
    && col6 === 45 && col7 === 45 && col8 === 45);

  const square0 = board[0][0] + board[0][1] + board[0][2] + board[1][0] + board[1][1] + board[1][2] + board[2][0] + board[2][1] + board[2][2] === 45;
  const square1 = board[0][3] + board[0][4] + board[0][5] + board[1][3] + board[1][4] + board[1][5] + board[2][3] + board[2][4] + board[2][5] === 45;
  const square2 = board[0][6] + board[0][7] + board[0][8] + board[1][6] + board[1][7] + board[1][8] + board[2][6] + board[2][7] + board[2][8] === 45;
  const square3 = board[3][0] + board[3][1] + board[3][2] + board[4][0] + board[4][1] + board[4][2] + board[5][0] + board[5][1] + board[5][2] === 45;
  const square4 = board[3][3] + board[3][4] + board[3][5] + board[4][3] + board[4][4] + board[4][5] + board[5][3] + board[5][4] + board[5][5] === 45;
  const square5 = board[3][6] + board[3][7] + board[3][8] + board[4][6] + board[4][7] + board[4][8] + board[5][6] + board[5][7] + board[5][8] === 45;
  const square6 = board[6][0] + board[6][1] + board[6][2] + board[7][0] + board[7][1] + board[7][2] + board[8][0] + board[8][1] + board[8][2] === 45;
  const square7 = board[6][3] + board[6][4] + board[6][5] + board[7][3] + board[7][4] + board[7][5] + board[8][3] + board[8][4] + board[8][5] === 45;
  const square8 = board[6][6] + board[6][7] + board[6][8] + board[7][6] + board[7][7] + board[7][8] + board[8][6] + board[8][7] + board[8][8] === 45;

  const squareValidate = square0 && square1 && square2 && square3 && square4 && square5 && square6 && square7 && square8;

  return horizontalValidate && verticalValidate && squareValidate ? 'Finished!' : 'Try again!';
}