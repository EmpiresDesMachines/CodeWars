/*
This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version

Task:
Give you a number array, calculate any two elements in the array(by + - * /), return maximum value.

Example:
sc([1,1]) should return 2     because 1 + 1 = 2
sc([1,2]) should return 3     because 1 + 2 = 3
sc([1,2,3]) should return 6   because 2 * 3 = 6
sc([-1,2]) should return 3    because 2 - -1 = 3
sc([1,0.5]) should return 2   because 1 / 0.5 = 2
sc([1,0]) should return 1     because 1 + 0 = 1 ( n/0 is not allowed)
sc([0.333,0.5]) should return 1.5015015015015014
                  because 0.5 / 0.333 = 1.5015015015015014
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

function sc(arr) {
  let max = 0;
  arr = arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    const a = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const b = arr[j];
      max = Math.max(max, a + b, a * b, a - b, a / (b || 1));
    }
  }

  return max;
}
