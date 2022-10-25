/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    const output = [];
    const map = {};
    
    for(let char of p) {
        if(char in map) {map[char]++;}
        else{map[char] = 1;}
    }
    
    let left=0, right=0, count=p.length;
    
    while(right < s.length) {
        if(map[s[right]] > 0) count--;
        
        map[s[right]]--;
        right++;
        
        if(count === 0) output.push(left);
        
        if(right-left == p.length) {
            if(map[s[left]] >= 0) count++;
            map[s[left]]++;
            left++;
        }
        
    }
    
    return output;
};