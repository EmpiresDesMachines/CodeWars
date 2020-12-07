/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year.

Input: Year as an integer.

Output: Number of Black Fridays in the year as an integer.

Examples:

unluckyDays(2015) == 3
unluckyDays(1986) == 1

Note: In Ruby years will start from 1593.
*/

function unluckyDays(year) {
  let unluck = 0;
  for (let x = 0; x < 12; x++) {
    new Date(year, x, 13).getDay() === 5 ? unluck += 1 : 0;
  }
  return unluck;
}