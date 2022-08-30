var minimumSum = function(num) {
    num = num.toString().split('').sort((a,b)=>{return a-b});
    let answer = (parseInt(num[0] * 10) + parseInt(num[2])) + (parseInt(num[1] * 10) + parseInt(num[3])); 
    
    
    return answer;
  };