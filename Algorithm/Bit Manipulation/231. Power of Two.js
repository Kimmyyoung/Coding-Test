/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    let result = false;
     
     if(n === 1) return true;
     if(n === 0) return false;
     
     while(n > 0) {
         n = n/2;
         
         if(n % 2 ===0) continue;
         if(n % 2 === 1) result = false;
         if(n === 1) result = true;
     }
     
     return result;
     
 };