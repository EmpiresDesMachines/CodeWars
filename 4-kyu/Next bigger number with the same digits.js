/*
Description:

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071

nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1

nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil


*/

function nextBigger(n) {
  let nums = n.toString().split("");
  let left = nums.length - 2;
  let right = nums.length - 1;

  for (; left >= 0; left--) {
    if (nums[left] < nums[left + 1]) {
      break;
    }
  }

  if (left === -1) return -1;

  for (; right > left; right--) {
    if (nums[right] > nums[left]) {
      break;
    }
  }

  [nums[left], nums[right]] = [
    nums[right],
    nums[left],
  ];

  left += 1;
  right = nums.length - 1;

  while (left < right) {
    [nums[left], nums[right]] = [
      nums[right],
      nums[left],
    ];
    left++;
    right--;
  }

  return Number(nums.join(""));
}
