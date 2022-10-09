/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let newidx = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
          nums[newidx] = nums[i];
          newidx++;
        }
    }
    
    //newidx == number that element is not 0 
      
    for(let i=newidx; i<nums.length; i++) {
      nums[i] = 0;
    }
  
      
      return nums;
      
  };