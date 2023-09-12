
function plusMinus(arr) {
  // Write your code here
  
  //1. Calculate how many positives and negatives and zero
  let positives = 0;
  let negatives = 0;
  let zero = 0;
  
  for(let i=0; i<arr.length; i++) {
      if(arr[i] > 0) {positives++;}
      else if(arr[i] === 0) {zero++}
      else if(arr[i] < 0) {negatives++}
  }
  
  //2. caculate ratio 
  let positive_ratio, negative_ratio, zero_ratio = 0;
  
  positive_ratio = (positives / arr.length).toFixed(6); 
  negative_ratio = (negatives / arr.length).toFixed(6);
  zero_ratio = (zero / arr.length).toFixed(6); 
  
  console.log(positive_ratio);
  console.log(negative_ratio);
  console.log(zero_ratio);    

  // return [positive_ratio, negative_ratio, zero_ratio];

}