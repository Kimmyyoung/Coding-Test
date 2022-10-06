/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function (nums, target) {
    //   let output;
    
    //   if (nums.includes(target) === false) {
    //     nums.push(target);
    //     nums.sort(function (a, b) {
    //       return a - b;
    //     });
    
    //     output = nums.indexOf(target);
    //   } else {
    //     output = nums.indexOf(target);
    //   }
    
    //   return output;
        
        
        //target이 범주 밖을 벗어날 때 
        
        if(nums.includes(target) === false ){
            nums.push(target);
            nums.sort((a,b) => a-b);
        }
        
        let start = 0, end = nums.length-1;
       
        
        while(start <= end){ 
            let mid = Math.floor((start + end) / 2);
    
            if(nums[mid] == target){
                return mid;
            }else if(nums[mid] > target) {
                end = mid -1;
            }else if(nums[mid] < target) {
                start = mid + 1;
            }
        }
    
    
    };
    