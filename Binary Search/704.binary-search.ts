/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] Binary Search
 */

// @lc code=start
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.ceil(left + (right - left) / 2);
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
    return -1;
};
// @lc code=end

