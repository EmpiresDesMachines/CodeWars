/*
You are given an image represented as a binary array. Your task is to predict the bounding box that encloses all the 1s within the image. The bounding box should be a hollow rectangle, where only the edges of the bounding box are 1s, and the interior is filled with 0s returned in an array of the same size as the original input.

You can make the following assumptions:

An image will only ever be comprised of 0s or 1s.
An image will always have a consistent m x n shape.
Important things to remember:

If an empty image is passed, then an empty array should also be returned.
If there are no 1s present then no bounding box should be drawn.
Example
Input:
[[0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,1,1,0,0,0,0],
 [0,0,0,1,1,1,1,0,0,0],
 [0,0,1,1,1,1,1,1,0,0],
 [0,1,1,1,1,1,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0]]
Output:

[[0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [0,0,0,0,0,0,0,0,0,0],
 [0,1,1,1,1,1,1,1,0,0],
 [0,1,0,0,0,0,0,1,0,0],
 [0,1,0,0,0,0,0,1,0,0],
 [0,1,1,1,1,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0]]
*/

function boundingBox(arr) {
  const fill = {
    startRow: Infinity,
    endRow: -Infinity,
    a: Infinity,
    b: -Infinity,
  };

  for (let i = 0; i < arr.length; i++) {
    const row = arr[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === 1) {
        fill.startRow = Math.min(fill.startRow, i);
        fill.endRow = Math.max(fill.endRow, i);
        fill.a = Math.min(fill.a, j);
        fill.b = Math.max(fill.b, j);
      }
    }
  }

  return Array.from({ length: arr.length }, (_, i) => {
    let row = new Array(arr[0].length).fill(0);
    if (i === fill.startRow || i === fill.endRow) {
      row = row.map((v, i) => (i >= fill.a && i <= fill.b ? 1 : v));
    } else if (i > fill.startRow && i < fill.endRow) {
      row[fill.a] = 1;
      row[fill.b] = 1;
    }

    return row;
  });
}
