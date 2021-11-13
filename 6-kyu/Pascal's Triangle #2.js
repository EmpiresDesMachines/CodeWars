/*
Here you will create the classic Pascal's triangle. Your function will be passed the depth of the triangle and you code has to return the corresponding pascal triangle up to that depth.

The triangle should be returned as a nested array. For example:

pascal(5) // should return [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]

To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together (except for the edges, which are all 1), e.g.:

              [1]
            [1   1]
          [1   2   1]
        [1   3   3   1]

*/

function pascal(depth) {
  const triangle = [];

  for (let i = 0; i < depth; i++) {
    const row = new Array(i + 1).fill();
    row[0] = row[row.length - 1] = 1;

    for (let j = 1; j < row.length - 1; j++) {
      row[j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
    }

    triangle.push(row);
  }

  return triangle;
}