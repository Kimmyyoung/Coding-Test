/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let left = 0, right = nums.length-1, mid=0;
    
    while(left < right) {
        mid = Math.floor((left + right) / 2);
        
        if(nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }
    return nums[left];
};

//[4,5,6,7,0,1,2]
// s.    m     e
//.        s.m e
//         se
//if m > e => s = m + 1
//if m < e => e = m - 1

//s === e return s or e
