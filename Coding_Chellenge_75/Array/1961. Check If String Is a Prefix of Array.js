var isPrefixString = function(s, words) {
    let string = "";
  
    for(let i=0; i<words.length; i++) {
      string += words[i];
      console.log(string);
      if(string === s) {
        return true;
      }
    }
  
    return false;
};