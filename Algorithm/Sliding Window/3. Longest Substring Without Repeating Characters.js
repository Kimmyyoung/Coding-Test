/**
 * @param {string} s
 * @return {number}
 */


 var lengthOfLongestSubstring = function(s) {
    let map = {};
    
    let windowstart = 0;
    let maxlength = 0;
    
    for(let i=0; i<s.length; i++) {
        let char = s[i];
        
        if(map[char] >= windowstart) windowstart = map[char] + 1;
        
        map[char] = i;
        
        maxlength = Math.max(maxlength, i-windowstart+1);
    }
    return maxlength;
    
};

//Time complexity : O(n);