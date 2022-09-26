/**
 * @param {number} num
 * @return {boolean}
 */
 var isSameAfterReversals = function(num) {
    let reversed1 = 0;
    let reversed2 = 0;
    let remain = Math.abs(num);
    
    
      //예외처리
      if(num === 0) return null;
      
     while(remain !== 0){
      reversed1 *= 10;
      reversed1 += remain % 10;
      remain = Math.floor(remain/10);
    }
    
    remain = Math.abs(reversed1);
  
    while(remain !== 0) {
      reversed2 *= 10;
      reversed2 += remain %10;
      remain = Math.floor(remain/10);
    }
    
   if(reversed2 === num) return true;
    else return false;
    
  
  };