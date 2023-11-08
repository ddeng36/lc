/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const length = nums.length;
    let slow = 0;
    let fast = 0;
    while(fast < length) {
        if(nums[fast] === val) {
            fast++;
        }
        else {
            nums[slow] = nums[fast];
            slow++;
            fast++;
        }
    }
    return slow;

};
// @lc code=end

