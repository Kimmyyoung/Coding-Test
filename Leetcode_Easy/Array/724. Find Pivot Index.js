/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let rightsum = 0, leftsum =0;
    
    for(let i=1; i<nums.length; i++){
      rightsum += nums[i];
    }
    
    if(leftsum === rightsum) return 0;
      
    for(let i=1; i<nums.length; i++){
      rightsum -= nums[i];
      leftsum += nums[i-1];
      if(leftsum === rightsum) return i;
    }
    
    return -1;
  
  };