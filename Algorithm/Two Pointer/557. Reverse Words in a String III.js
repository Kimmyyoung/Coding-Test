/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    s = s.split('');
   
  for(let left = 0, right = s.length -1; left<right; left++, right--) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
  }
  return s.join('').split(' ').reverse().join(' ');
};