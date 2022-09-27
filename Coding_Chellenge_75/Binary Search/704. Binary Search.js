/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0, right = nums.length-1;
 
     if(nums[0] === target) return 0;
     
     while(left < right) {
         let mid = left + Math.floor((right-left+1)/2);
         
         if(target > nums[mid]) {
             left = mid;
         }else if(target < nums[mid]){
             right = mid-1;
         }else{
             return mid;
         }
     }
     
     return -1;
     
 
 };

 //Time Complexity : log(log n);
 