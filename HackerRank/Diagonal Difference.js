
function diagonalDifference(arr) {
  // Write your code here
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  
  for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr.length; j++) {
          if(i === j){
          leftDiagonal += arr[i][j];                
          }
      }
  }
  
  console.log(leftDiagonal);
  
  for (let i = 0; i < arr.length; i++) {
  rightDiagonal += arr[i][arr.length - 1 - i];
  };
          
  return Math.abs(leftDiagonal - rightDiagonal);
  
}