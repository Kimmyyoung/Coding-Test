/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let b=0;
    for(let a =0; a<nums.length; a++) {
      if(nums[a] !== 0) {
      [nums[b],nums[a]] = [nums[a],nums[b]];
      b++;
      }
      
    }
  
  return nums;
  
};