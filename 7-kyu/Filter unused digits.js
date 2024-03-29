/* 
Given a list of integers, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"

Note: the digits in the resulting string should be sorted.

*/

function unusedDigits(...args) {
  args = args.join('');
  let res = '';

  for (let i = 0; i < 10; i++) {
    if (!args.includes(i)) res += i;
  }

  return res;
}
