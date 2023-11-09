/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    const ans = [];
    const len = nums.length;
    for(let i = 0; i < len - 2; i++){
        if(nums[i] > 0){
            break;
        }
        if(i > 0 && nums[i] === nums[i - 1]){
            continue;
        }
        let j = i + 1;
        let k = len - 1;
        while(j < k){
            let sum = nums[i] + nums[j] + nums[k];
            if (sum > 0) {
                k--
            }
            else if(sum < 0){
                j++;
            }
            else{
                ans.push([nums[i], nums[j], nums[k]]);

                while (j < k && nums[j] === nums[j + 1]){
                    j++;
                }
                while(j < k && nums[k] === nums[k - 1]){
                    k--;
                }             
                j++;
                k--;
            }
    }
};
return ans;
}
console.log(threeSum([-1,0,1,2,-1,-4]))
// @lc code=end
//[-4,-1,-1,0,1,2]
