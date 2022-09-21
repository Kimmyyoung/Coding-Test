/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    //     let result = [];
    //     let helper = nums[0];
        
    //     for(let i = 1; i<nums.length; i++) {
    //         result.push(helper);
    //         helper = helper + nums[i];
    //     }
    //     result.push(helper);
        
    //     return result;
        
        for(let i=1; i<nums.length; i++) {
            nums[i] += nums[i-1];
        }
        
        return nums;
    };
    
    