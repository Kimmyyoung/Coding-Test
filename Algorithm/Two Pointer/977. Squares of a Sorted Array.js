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


/*

Solution 
: This is a straightforward question. The only trick is that we can have negative numbers in the input array.
which will make it a bit difficult to generate the output array with squares in sorted order.

An easier approach could be to first find the index of the first non-negative number in the array.
After that, we can use Two Pointers to iterate the array. 
One pointer will move forward to iterate the non-negative numbers, and other pointer will move backward to 
iterate the negative numbers. At any step, whichever number gives us a bigger square will be added to the output array
For the above mentioned Example-1, we will do something like this.

Since the numbers at both ends can give us the largest square, an alternate approach could be to use two pointers starting at both ends of the input array.
At any step, whichever pointer gives us the bigger square, we add it to the result array and move to the next number according to the pointer
For the above-mentioned Example-1 we will do something like this

Time Complexity
: The above algorithm's time complexity will be O(N) as we are iterating the input array only once

Space Complexity 
: The above algorithm's space complexity will be O(N) this space will be used for the output array

*/