function lonelyinteger(a) {
  // Write your code here
  // 1. make a new object 
  // 2. object should be like this 
  // { element : count }
  
  var countObject = {};

  a.forEach(function(element) {
      if (countObject[element]) {
          countObject[element] += 1;
      } else {
          countObject[element] = 1;
      }
  });
  
  console.log(countObject);
  let i = 0;
 for(let i in countObject) {
     if(countObject[i] === 1){
         console.log(i);
         return i;
     }
 }
 
 return false;
 

  
}