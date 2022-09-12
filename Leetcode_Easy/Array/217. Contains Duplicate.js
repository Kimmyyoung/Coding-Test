/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {

    let map={};
    
    //exception
    
    if(nums.length===0) return false;
    
    for(let i=0; i<nums.length; i++) {
        if(map[nums[i]]) { map[nums[i]] += 1; }
        else { map[nums[i]] = 1; }
    
        if(map[nums[i]] >= 2) return true;
    }
    
    return false;
    
};

//Using Hashmap finding if there is duplication or not 