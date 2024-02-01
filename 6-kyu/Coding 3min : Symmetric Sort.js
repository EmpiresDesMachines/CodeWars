/*
This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

Task:
Give you a number array(element range:1-99, array length range: 6-40), please do a "Symmetric Sort" with it.

rule: sort the number, the first smallest number at the left side, the second smaller number at the right side, and so on...

Example:
example1:                        example2:

array=[1,2,3,4,5,6,7,8,9]        array=[1,1,2,2,3,3,4,4,5]

after sort, should return:       after sort, should return:

      [1,3,5,7,9,8,6,4,2]              [1,2,3,4,5,4,3,2,1]
See more example at the testcases.

Series:
Bug in Apple
Father and Son
Jumping Dutch act
Planting Trees
Give me the equation
Find the murderer
Reading a Book
Eat watermelon
Special factor
Guess the Hat
Symmetric Sort
Are they symmetrical?
Max Value
Trypophobia
Virus in Apple
Balance Attraction
Remove screws I
Remove screws II
Regular expression compression
Collatz Array(Split or merge)
Tidy up the room
Waiting for a Bus
*/

function sc(array) {
  array = array.sort((a, b) => a - b);
  const left = array.filter((v, i) => !(i % 2));
  const right = array.filter((v, i) => i % 2).reverse();
  return [].concat(left, right);
}
