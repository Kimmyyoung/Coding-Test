var isAnagram = function(t,s) {
    if(s.length !== t.length) return false;
  
    let map = {};
    
    for(let i=0; i<s.length; i++){
      map[s[i]] = map[s[i]] + 1 || 1;  
    }
    
    for(let j=0; j<t.length; j++){
      if(!map[t[j]]) {return false;}
      else map[t[j]]--;
    }
      
      return true;
};

