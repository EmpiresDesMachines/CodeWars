/* 
Write

function consecutiveOnes(nums) {}

that takes in array nums and returns the maximum consecutive 1's

For example

consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) === 3
consecutiveOnes([1, 1, 0, 0, 1]) === 2
consecutiveOnes([0, 0, 0, 0, 0]) === 0

PLEASE NOTE THAT THIS KATA HAS HEAVY PERFORMANCE TESTS AND YOU NEED OPTIMIZED CODE TO PASS IT

*/

function consecutiveOnes(nums) {
  //    return Math.max(...(nums.join('').match(/1+/g) || ['']).map(v => v.length));
  let max = 0;
  let count = 0;
  let flag = false;

  for (let i = 0; i < nums.length + 1; i++) {
    if (nums[i]) {
      flag = true;
    }

    if (flag && nums[i]) {
      count++;
      continue;
    }

    if (!nums[i]) {
      flag = false;
      max = Math.max(max, count);
      count = 0;
    }
  }

  return max;
}
