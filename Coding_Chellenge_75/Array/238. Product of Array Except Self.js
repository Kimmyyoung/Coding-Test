/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let output = nums.map(n=>1);
    let product = 1; //이건 왜 선언하는진 잘 모르겠음..
    
    for(let i=0; i<nums.length; i++){
        output[i] = output[i] * product;
        product = product * nums[i];
    } //왼쪽에서 부터 곱한 값
    
    product = 1;
    
    for(let j=nums.length -1; j>=0; j--){
        output[j] = output[j] * product;
        product = product * nums[j];
    } //오른쪽에서 부터 곱한 값
    
    return output;
};