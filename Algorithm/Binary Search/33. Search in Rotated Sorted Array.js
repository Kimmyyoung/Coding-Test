/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 const search = function(nums, target){

    let left = 0, right = nums.length -1, mid = 0;

    while(left <= right) {
        mid = Math.floor((left+right)/2);

        if(nums[mid] === target) return mid;
        
        else if(nums[left] <= nums[mid]) {
            if(nums[left] <= target && target < nums[mid]) right = mid -1;
            else left = mid + 1;
        } 
        else if(nums[mid] <= nums[right]) {
            if(nums[mid] < target && target <= nums[right]) left = mid+1;
            else right = mid-1;
        }
    }

return -1;
    
};


/*
Time Complexity : O(logN) Becase we are checking the nums[mid] instead of checking every elements.
Space Complexity : O(1) We do not use extra space

IF smallest <= target <= biggest
  then target is here
ELSE
  then target is on the other side

*/
