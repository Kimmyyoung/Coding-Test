/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    let result = 0;
    
    for(let i = 0; i<32; i++) {
        result += n & 1;
        n >>= 1;
        if(i < 31) {result <<= 1}
    }
    
    return result >>> 0;
    
};