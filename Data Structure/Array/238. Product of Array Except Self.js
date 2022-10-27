/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {

    let helpnumber = 1;
    let leftarr = [];
    
    for(let i=0; i<nums.length; i++) {
        leftarr[i] = helpnumber;
        helpnumber *= nums[i];
    }
    
    let helpnumberright = 1;
    let rightarr = [];
    
    for(let i=nums.length-1; i>=0; i--) {
        rightarr[i] = helpnumberright;
        helpnumberright *= nums[i];
        
        rightarr[i] *= leftarr[i];
    }
    
    return rightarr;
};


// example ) [1,2,3,4];

// f = 1; 
// [1(f), 1x1(f *nums[0]), 1x1x2 (f*nums[0]*nums[1]), 1x1x2x3 (f*nums[0]*nums[1]*nums[2])]
// leftArr = [1,1,2,6];

// t = 1;

// [1x4x3x2(t*nums[3]*nums[2]*nums[1]),1x4x3(t*nums[3]*nums[2]),1x4(t*nums[3]),1(t)]
// rightArr = [24,12,4,1]

//leftArr * rightArr = answer!