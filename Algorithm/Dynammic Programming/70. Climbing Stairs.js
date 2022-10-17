/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let result = [0,1,2];
    
    if(n===0) return 0;
    if(n<=2) return n;
    
    for(let i = 3; i<=n; i++) {
        result[i] = result[i-1] + result[i-2];
    }
    
    return result[n];
};
