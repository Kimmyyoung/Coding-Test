/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    let left = 0, right = 0, maxchar=0;
    let map = {};
    
    while(right < s.length) {
        const char = s[right];
        map[char] = map[char] ? map[char]+1 : 1;
        
        if(map[char] > maxchar) maxchar = map[char];
        
        if(right-left+1-maxchar > k) {
            map[s[left]]--;
            left++;
        }

        right++;
    }
    
    return right-left;
};