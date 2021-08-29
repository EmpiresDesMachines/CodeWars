/*
Task:
Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1piece of land. Some examples for better visualization:

['XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO']
or

should return: "Total land perimeter: 24",
while

['XOOO',
 'XOXO',
 'XOXO',
 'OOXX',
 'OOOO']

should return: "Total land perimeter: 18"

Good luck!
*/

function landPerimeter(arr) {
  let perimeter = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 'X') {
        perimeter += i === 0 || arr[i - 1][j] === 'O'; // border top || 'O'
        perimeter += j === 0 || arr[i][j - 1] === 'O'; // border left || 'O'
        perimeter += i === arr.length - 1 || arr[i + 1][j] === 'O'; // border bottom || 'O'
        perimeter += j === arr[i].length - 1 || arr[i][j + 1] === 'O'; // border rigth || 'O'
      }
    }
  }

  return `Total land perimeter: ${perimeter}`;
}