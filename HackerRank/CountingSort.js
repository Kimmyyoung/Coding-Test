
function countingSort(arr) {
  // Write your code here
  
  // //1. Find a max elements 
  // let max = Math.max(...arr);
  
  // //2. Make a new array * counting Array
  // let countingArray = Array(max+1).fill(0);
  
  // //3. Add count into countingArray(index)
  // for(let i=0; i<arr.length; i++){
  //     countingArray[arr[i]]++;
  // };
  
   let counterArray = Array(100).fill(0);
  
  for (let number of arr) {
      counterArray[number]++
  }
  return counterArray;
  
  // let res = [];
  // for(let i=0; i<countingArray.length; i++) {
  //     for(let j=0; j<countingArray[i]; j++){
  //         res.push(i);
  //     }
  // };
  
  // console.log(res);
  // return res;
  
  return countingArray;
}