/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
Courtesy of rosettacode.org
*/

function solution(list) {
  let extraction = [];
  let temp = [list[0]];

  for (let i = 1; i < list.length + 1; i++) {
    if (list[i] !== list[i - 1] + 1) {
      if (temp.length >= 3) {
        extraction.push(temp[0] + '-' + temp[temp.length - 1]);
      } else {
        extraction.push(...temp);
      }

      temp = [];
      temp.push(list[i]);
    } else temp.push(list[i]);
  }

  return extraction.join(',');
}
