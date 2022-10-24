/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(S, T) {
    return helper(S) === helper(T);
  };
  
  let helper = function (s) {
   let arr = []; //Queue
    for(let i =0; i< s.length; i++) {
      if(s[i] === '#') arr.pop();
      else arr.push(s[i]);
    }  
    return arr.join('');
  }