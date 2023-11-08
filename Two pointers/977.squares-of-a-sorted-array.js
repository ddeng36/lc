/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const res = [];
    let left = 0;
    let right = nums.length - 1;
    let cur = nums.length - 1;
    while(cur >= 0){
        const leftPow = nums[left] ** 2;
        const rightPow = nums[right] ** 2;
        if (leftPow > rightPow) {
            res[cur] = leftPow;
            left++;
        }
        else {
            res[cur] = rightPow;
            right--;
        }
        cur--;
    }
    return res;
};
// @lc code=end

