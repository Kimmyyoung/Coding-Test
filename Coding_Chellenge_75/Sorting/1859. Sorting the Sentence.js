var sortSentence = function(s) {
    s = s.split(' ');
    s = s.sort((a,b) => a[a.length-1] - b[b.length-1]);
    s = s.map((word) => word.slice(0, word.length-1))
    s = s.join(' ');
    
    return s;
  };