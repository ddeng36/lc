/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    // 生成二维数组用这种方式
    const matrix = new Array(n);
    for (let i = 0; i < n; i++) {  
        matrix[i] = new Array(n);
    };
    let left = 0, right = n - 1, top = 0, bottom = n - 1;
    //用num记录！！！！
    let num = 1;
    while (left <= right && top <= bottom && num <= n ** 2) {
        //注意边界条件！！！！！！1
        for(let i = left; i < n && num <= n ** 2 && i <= right;i++,num++) {
            matrix[top][i] = num;
        }
        top++;
        for(let i = top; i < n && num <= n ** 2 && i <= bottom;i++,num++) {
            matrix[i][right] = num;
        }
        right--;
        for(let i = right; i >= left && num <= n ** 2 && i >=left;i--,num++) {
            matrix[bottom][i] = num;
        }
        bottom--;
        for(let i = bottom; i >= top && num <= n ** 2 && i >= top;i--,num++) {
            matrix[i][left] = num;
        }
        left++;
    };
    return matrix;

};
console.log(generateMatrix(4));
// @lc code=end

