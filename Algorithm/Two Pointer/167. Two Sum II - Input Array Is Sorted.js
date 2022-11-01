/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let left = 0;
     let right = numbers.length - 1;
     
     while(numbers[left] + numbers[right] !== target) {
         
         if(numbers[left] + numbers[right] < target) {
             left++;
         }else {
             right--;
         }
         
     }
     
     return ([left+1, right+1]);
     
 };
 //Sorted Array
 

 //Sorted Array => Algorithm "Two Pointer"

 /*

 Time Complexity 
 : The time complexity of the above algorithm will be O(N), where 'N' is the total number of elements in the given array.

 Spcace Complexity
: The algorithm runs in constant space O(1)


 */