/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var countOdds = function(low, high) {
    //Exception
    if(low === high) return low % 2 === 0? 0 : 1;
    if(high - low === 1) return 1;
    if(low === 0 || high === 0) return (high + low) / 2;
    
    
    if((low % 2 ===0 && high%2 === 0) || (low % 2 ===0 || high %2 ===0)) return (high-low)/2;
    
    return (high - low)/2 +1;
    

 
    
};

// Algorithm

// if low and high is odd => (high - low) + 1
// if low and high is add => high - low
// if low is odd or high is odd => (high-low) -1

//Time complexity : 1
//space Complexity : 1

