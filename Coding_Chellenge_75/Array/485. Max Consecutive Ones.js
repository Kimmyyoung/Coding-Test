
 var findMaxConsecutiveOnes = function(nums) {
    
    let count = 0;
    let answer = [];
    
    //예외처리
    
    // 1. nums.length 가 0 일때 즉, nums 가 존재하지 않을때
    if(nums.length == 0) {return 0;}
    
    //2. nums 의 요소들이 전부 0일때 
    if(Math.max(...nums) === 0) {return 0;}

    
 
    
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === 1) {
            count = count + 1;
            if(nums[i+1] === 0 || nums[nums.length-1] === 1) answer.push(count);
        }else {
            count = 0;
        }
    }
    
    return Math.max(...answer);
};