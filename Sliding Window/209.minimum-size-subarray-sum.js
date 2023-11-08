/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const len = nums.length;
    let min = Infinity;
    for(let slow = 0; slow < len; slow++) {
        let fast = slow;
        let sum = 0;
        while (sum <= target && fast < len){
            sum += nums[fast];
            fast++;
            if (sum >= target) {
                min = Math.min(min, fast - slow);
            }
        }
    }
    return min === Infinity ? 0 : min;
};
// @lc code=end

