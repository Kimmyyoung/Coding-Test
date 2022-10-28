var maxProduct = function(nums) {
    let max = [nums[0]]; //2
    let min = [nums[0]]; //2
    let maxresult = 0;
    
    for(let i=1; i<nums.length; i++) {
      max[i] = Math.max(nums[i], max[i-1] * nums[i], min[i-1] * nums[i]);
      min[i] = Math.min(nums[i], max[i-1] * nums[i], min[i-1] * nums[i]);
      maxresult = Math.max(maxresult, max[i]);  
    }
    
    return maxresult;
  };
  
  // maxProduct([2,3,-2,4]);
  
  // [2,3,-2,4]
  
  // max[0] = 2
  // min[0] = 2
  
  // max
  // ---
  // [2, max(3, 2*3, 2*3)]
  // [2, 6, max(-2, -2*6, -2*3)]
  // [2, 6, -2, max(4, 4*-2, 4*-12)
  // [2, 6, -2, 4]
  
  // min 
  // ---
  // [2, min(3, 2*3, 2*3)]
  // [2, 3, min(-2, -2*6, -2*3)]
  // [2, 3, -12, min(4, 4*-2, 4*-12)
  // [2, 3, -12, -24]
  
  // answer = maxsum of maxarray which is maximum array
  
  