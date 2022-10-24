let threesum = function (nums) {
    nums.sort((a,b) => {return a-b;});
    console.log(nums);
  
    let res = [];
    for(let i =0; i<nums.length; i++) {
      let left = i+1;
      let right = nums.length -1; 
      let target = 0 - nums[i];
      
       if(i > 0 && nums[i] === nums[i-1]) continue;
      
       while(left < right) {
         if(nums[left] + nums[right] === target) {
           res.push([nums[i], nums[left], nums[right]]); 
           left++;
           while(nums[left] === nums[left-1]) left++;
         }else if(nums[left] + nums[right] < target) {
           left++;
         }else{
           right--;
         }
       }
     }
  

  console.log(res);
  
}

threesum([-1,0,1,2,-1,-4]);