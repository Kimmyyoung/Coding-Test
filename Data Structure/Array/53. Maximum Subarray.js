/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let helper = [nums[0]];
     let left = 0;
     
     if(nums.length === 1) return nums[0];
     
     for(let i=1; i<nums.length; i++) {
         helper.push(Math.max(nums[i], helper[i-1]+nums[i]));
     }
     
     return Math.max(...helper);  
 };
 
 