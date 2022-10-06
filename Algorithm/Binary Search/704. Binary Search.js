/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let left = 0, right = nums.length-1;
    
    //exeption
    if(nums.length === 0) {return -1;}
    if(nums[0] === target) return 0;
    
    
    
    while(left < right) {
        let mid = left + Math.floor((right-left+1)/2);
        
        if(nums[mid] > target) right = mid-1;
        else if(nums[mid] < target) left = mid;
        else if(nums[mid] == target) return mid;
    }
    
    return -1;

};
