const sortedSquares = function (nums) {
    //create a new array the same length of the original array
    const squaredArr = Array(nums.length)
    let left = 0
    let right = nums.length - 1
    //iterate through the new array from the back
    for (let i = nums.length - 1; i >= 0; i--) {
        const leftSquared = nums[left] ** 2
        const rightSquared = nums[right] ** 2
        //if the left number squared is more than the right number squared
        if (leftSquared > rightSquared) {
            //set the current element to the left number squared and increment the left pointer
            squaredArr[i] = leftSquared
            left++
        }
        else {
            //set the current element to the right number squared and increment the right pointer
            squaredArr[i] = rightSquared
            right--
        }
    }
    //return the array
    return squaredArr
}
 
//   //예외처리
//   if(nums.length === 0) return undefined;
  
  
//   let result = []; 
//   for (let i=0; i<nums.length; i++){
//       result[i] = nums[i] * nums[i];
//   }
//   result.sort((a,b)=> a-b);

//     return result;