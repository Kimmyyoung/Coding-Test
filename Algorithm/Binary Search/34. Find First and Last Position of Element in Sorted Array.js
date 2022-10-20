/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let start = 0, end = nums.length-1, mid = 0;
    
    while(start <= end) {
        mid = Math.floor((start+end)/2)
        if(nums[mid] > target) end = mid;
        else if(nums[mid] < target) start = mid+1;
        else if(nums[mid] == target) {
            start = mid;
            end = mid;
            break;
        }
    }
   if (start > end) return [-1, -1];

    while(nums[start-1] === target) start--;
    while(nums[end+1] === target) end++;
    
    return [start, end];
};