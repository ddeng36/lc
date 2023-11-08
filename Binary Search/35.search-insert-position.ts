/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
var searchInsert = function (nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        var mid = Math.ceil(left + (right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
            continue;
        }
        else {
            right = mid - 1;
            continue;
        }
    }
    return left;
};
// @lc code=end

