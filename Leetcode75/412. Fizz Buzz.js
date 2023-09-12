var fizzBuzz = function(n) {
     // Write your code here
    let newArr = [];
    let i = 1; 
    
    while (i<= n) {
        newArr.push(`${i}`); 
        i++;
    }
    // Example : n = 10
    // newArr = [1,2,3,4,5,6,7,8,9,10];
    
    for(let j=0; j<newArr.length; j++) {
         if(newArr[j]%3===0 && newArr[j]%5 ===0) {newArr[j] = "FizzBuzz"}
        else if(newArr[j]%3 === 0) {newArr[j] = "Fizz"}
        else if(newArr[j]%5 === 0) {newArr[j] = "Buzz"}
    }
    
    return newArr;
};