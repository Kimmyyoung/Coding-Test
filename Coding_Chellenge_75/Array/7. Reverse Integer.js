/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    //예외처리
    
    
    let result = 0;
    let remain = Math.abs(x);
  
    while(remain !== 0) {
        result *= 10;  
        result += remain % 10; //3
        remain = Math.floor(remain/10);
        
    }
    
    if(result > 2**31) return 0;
    
    return x<0? -result : result;
};