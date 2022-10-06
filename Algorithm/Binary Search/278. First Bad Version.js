/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
    return function(n) {
        let left = 0, right=n;
        
        while(left <= right) {
            let mid = Math.floor((left+right) / 2);
              
            if(isBadVersion(mid)){
                  if(isBadVersion(mid-1)) right = mid-1;
                  else return mid;
              }
              // badversion == 'true'
            
            else left = mid+1;
        };
        
        
    }
      
      
  };