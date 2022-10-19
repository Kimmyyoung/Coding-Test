var singleNumber = function(nums) {
    let obj = {};
	
    for (let i = 0; i < nums.length; i++) {
        if(!obj[nums[i]]) {
            obj[nums[i]] = true;
        } else {
          delete obj[nums[i]];
        }
    }
	
    return Object.keys(obj)[0];
};