/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let left = 0;
    let right = nums.length -1;
  
    if(nums.length === 1) return nums[0];
    if(nums[left] < nums[right]) return nums[left];
    
    while(left <= right) {
        
        const mid = Math.floor((left+right) / 2);
        
        let leftval = nums[left];

        let midval = nums[mid];
        
        let leftofMid = nums[mid-1];
        let rightofMid = nums[mid+1];
        
        if(midval > rightofMid) return rightofMid;
        else if(leftofMid > midval) return midval;
        
        if(leftval < midval) left = mid+1; 
        else if(leftval > midval) right = mid-1;
    
    }    
};



//  l  lv m rv r
// [4,5,6,7,0,1,2]

// if(m(7) > rv(0)) return rv(0)

//  l   lvm rv  r
// [5,6,7,0,1,2,4]

// if(m(0) < lv(7)) return m(0)

// l    lvm rv
// [6,7,0,1,2,4,5]

// lv < m => r = mid-1;

