/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const res = [];
  const len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
        if (j > i+1 && nums[j] === nums[j - 1]) {
            continue;
        }
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          left++;
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          right--;
        } else if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return res;
};
// @lc code=end
// console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
//[-2,-1,0,0,1,2]
console.log(fourSum([2, 2, 2, 2, 2], 8));