/*
Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/

const findSum = n => Array.from({ length: n }, e => n--).filter(n => !(n % 3) || !(n % 5)).reduce((a, b) => a + b);