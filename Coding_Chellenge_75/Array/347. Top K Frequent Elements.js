/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  
    let map ={};
    let result = [];
   
    
    for(let i=0; i<nums.length; i++) {
        // if(map[nums[i]]) { map[nums[i]] = map[nums[i]]+1; }
        // else { map[nums[i]] == 1;}
        map[nums[i]] = map[nums[i]] + 1 || 1;
    }
   
    let keys = Object.keys(map);
    
    keys.sort((a,b) => {return map[a]-map[b]});
    
    while(result.length < k) {
        result.push(keys.pop());
    }
    
    return result;
    
    
            
};