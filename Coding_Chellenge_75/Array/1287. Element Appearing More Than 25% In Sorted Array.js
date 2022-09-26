var findSpecialInteger = function(arr) {
    let length = arr.length;
    let compare = Math.floor( length / 4);
    let map = {};
    
      //예외처리
      
      if(arr.length === 0) return false;
      
    
    for(let i=0; i<arr.length; i++) {
      
      if(!map[arr]) map[arr] == 1;
      console.log(map);
      
      
      if(map[arr[i]]) { return arr[i] };
      
    }
      
      return false;
  };