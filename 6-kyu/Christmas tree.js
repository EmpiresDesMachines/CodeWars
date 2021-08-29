/*
Create a function that returns a christmas tree of the correct height.

For example:

hieght = 5 should return:

    *
   ***
  *****
 *******
*********
Height passed is always an integer between 0 and 100.

Use \n for newlines between each line.

Pad with spaces so each line is the same length. The last line having only stars, no spaces.
*/

function christmasTree(height) {
  const res = [];

  for (let i = height; i > 0; i--) {
    res.push(' '.repeat(height - i) + '*'.repeat((i * 2) - 1) + ' '.repeat(height - i));
  }

  return res.reverse().join('\n');
}