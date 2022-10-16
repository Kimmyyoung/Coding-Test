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
 
 //two pointer Algorithm
 //[2,7,11,15]
 // l.      r
 //while (l+r !== target)
 //if(target) result.push(l, r) 1++
 //else r--;