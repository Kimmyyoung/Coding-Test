/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function(s1, s2) {
    let map = {};
     
     for(let i =0; i<s1.length; i++) {
       map[s1[i]] = (map[s1[i]] || 0) + 1;
     };
     
     let left = 0;
     let right = 0;
     let requriedlength = s1.length;
     
     while(right < s2.length) {
       if(map[s2[right]] > 0) requriedlength--;
       map[s2[right]]--;
       right++;
       if(requriedlength === 0) return true;
       if(right-left === s1.length) {
         if(map[s2[left]] >= 0) requriedlength++;
         map[s2[left]]++;
         left++;
       }
     }
     
     return false;
   
   }
   