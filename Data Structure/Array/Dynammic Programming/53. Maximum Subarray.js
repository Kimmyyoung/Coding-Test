/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let localMax = nums[0];
    let globalMax = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
    	localMax = Math.max(nums[i], localMax + nums[i]);
        if(localMax > globalMax) {
        	globalMax = localMax;
        }
    }
    
    return globalMax;
};


maxSubArray([-2,1,-3,4]); 


//Dynamic Programming Algorithm : Largest Sum Contiguous Subarray (Kadane’s Algorithm)
//Time Coplexity : O(N) Speed : 80ms


// helper = -2
// -2, Math.max(1, -2+1)

// helper = -2, 1
// -2, 1, Math.max(-3,1+-3)

// helper = -2, 1, -2
// -2 , 1, -2, Math.max(4, -2+4)

// helper = -2, 1, -2, 4

// answer = 4;