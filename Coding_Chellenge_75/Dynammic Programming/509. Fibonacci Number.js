/**
 * @param {number} n
 * @return {number}
 */

 var fib = function(n) {
    let result = [0,1,1];
    
    //exeption 
    
    if(n === 0) return 0;
    if(n <= 2) return 1;
    
    for(let i=3; i<=n; i++) {
        result[i] = result[i-1] + result[i-2];
    }
    
    return result[n];
};