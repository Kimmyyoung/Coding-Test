/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[\W_]/g, "");
    
    let left = 0;
    let right = s.length-1;
    
    while(left < right){
        if(s[left] !== s[right]){
            return false;
        }
        
        left ++;
        right --;
        
    }
    
    return true;
};


/*
    Algorithm : Two pointer
    Time Complexity : O(N) ----> while
    Space : O(1)

    first of all, I remove all of the blank and made all of spelling to lowercase. 
    then made left point and right point which is last one of array. 

    then compare if there is same value or not 
    if not, return false 
    if so, another pointer (left ++ )

    then return true
*/
