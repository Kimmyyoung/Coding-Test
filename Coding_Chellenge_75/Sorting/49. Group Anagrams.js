var anagram = function (str) {
    let map = {};
    for(let i=0; i<str.length; i++) {
      let word = str[i];
      let character = word.split('').sort().join('');
      
      if(!map[character]) map[character] = [];
      map[character].push(word);
      
    }
    
    return Object.values(map);
    
  }