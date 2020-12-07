/*
Your job is to write a function which increments a string, to create a new string.

    If the string already ends with a number, the number should be incremented by 1.
    If the string does not end with a number. the number 1 should be appended to the new string.

Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString(string) {
  const arr = string.split(/(\d+)$/);
  if (arr.length === 1) return `${string}1`;

  let nums = [...arr[1]].reverse();

  for (let i = 0; i < nums.length; i++) {
    if (i == nums.length - 1 && nums[i] == 9) {
      nums.push('');
      for (let j = 1; j < nums.length; j++) {
        nums[j] = 0;
        if (j == nums.length - 1) nums[j] = 1;
      }
      break;
    }

    if (nums[i] == 9) {
      nums[i] = 0;
      continue;
    }

    if (nums[i] != 9) {
      ++nums[i];
      break;
    }
  }

  nums = nums.reverse().join('').toString();

  return arr[0] + nums;
}