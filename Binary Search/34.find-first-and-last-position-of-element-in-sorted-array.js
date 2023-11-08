/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    var leftIdx = getLeftIdx(nums, target);
    var rightIdx = getRightIdx(nums, target);
    if(leftIdx == -2 || rightIdx == -2) {
        return [-1, -1];
    }
    if (rightIdx - leftIdx > 1) {
        return [leftIdx + 1, rightIdx - 1];
    }
    else {
        return [-1, -1];
    }
}
;
function getLeftIdx(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    var leftHas = -2;
    while (left <= right) {
        var mid = Math.ceil(left + (right - left) / 2);
        if (nums[mid] >= target) {
            right = mid - 1;
            leftHas = right;
        }
        else {
            left = mid + 1;
        }
    }
    return leftHas;
}
function getRightIdx(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    var rightHas = -2;
    while (left <= right) {
        var mid = Math.ceil(left + (right - left) / 2);
        if (nums[mid] <= target) {
            left = mid + 1;
            rightHas = left;
        }
        else {
            right = mid - 1;
        }
    }
    return rightHas;
}
// @lc code=end

