/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//Subarray size (right - left + 1) gives the number of new sub-arrays generated upon adding a new element to the subarray.
// start: []
// add 10: [10] -> +1 -> [10]
// add 4: [10,4] -> +2 -> [4], [10,4]
// add 2: [10,4,2] -> +3 -> [2], [4,2], [10,4,2]
// add 1: [10,4,2,1] -> +4 -> [1], [2,1], [4,2,1], [10,4,2,1]

var numSubarrayProductLessThanK = function(nums, k) {
    //예외처리 
    if(nums === null || nums.length === 0) return 0;
    if(k <= 1) return 0;    
    
    let start = 0, product = 1, count = 0;
    
    for(let end = 0; end < nums.length; end++) {
        product *= nums[end];
        while(product >= k  && start <= end) {
            product /= nums[start++];
        }
        count += end - start +1;
    }
    
    return count;
};