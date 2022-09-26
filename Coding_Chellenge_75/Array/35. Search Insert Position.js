/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let first = 0;
    let last = nums.length-1;
    
    if(nums.includes(target) === false ){
        nums.push(target);
        nums.sort((a,b) => a-b);
    }

    //예외처리
    if(nums[last] < target) return last+1;
    if(nums[first] > target) return 0;
    

    while(first <= last) {
        let mid = Math.floor((first + last) /2);

        if(nums[mid] === target){
            return mid;
        }
        else if(nums[mid] > target) {
            last = mid-1;
        }else if(nums[mid] < target){
            first = mid+1;
        }
    }
};