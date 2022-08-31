 var getRow = function(rowIndex) {
    let arr = [1,1]
    let newArr = [];
    
    if(rowIndex === 0) return [1];
    if(rowIndex === 1) return arr;
    
    
    for(let index = 2; index <= rowIndex; index++) {
        newArr = [1];
        for(let index2 = 1; index2 < arr.length; index2++) {
            newArr.push(arr[index2-1]+arr[index2]);
        }
        newArr.push(1);
        arr = newArr;
    }
    return arr;    
};