/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const ans = [];
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    const total = matrix.length * matrix[0].length;

    while (top <= bottom && left <= right && ans.length < total) {
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right]);
        }
        right--;
        for (let i = right; i >= left; i--) {
            ans.push(matrix[bottom][i]);
        }
        bottom--;
        for (let i = bottom; i >= top; i--) {
            ans.push(matrix[i][left]);
        }
        left++;

    }
    return ans;
};
// @lc code=end
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
