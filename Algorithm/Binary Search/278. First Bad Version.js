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


  /*
    The first half part of the data is false, and the second half part of the data are true
    To find the first bad version means to find the turning point where this position true 
    and its previous point is false 

    We use a binary search method for our solution strategy

    1. To find mid, use left + (right — left)/2 Not using (left + right) / 2 to avoid potential overflow
    2. If we are lucky we find the mid is a bad version and mid - 1 is not a bad version 
    then we return mid as expected first bad version
    3. If mid is not bad version, this means all previous elements are true.
    This leads to the first bad version can only exist in the right half of the rest
    of the data! We lock our search space into the right half of the current data 
    which is (mid + 1 , right) 
    4. If mid is bad version, this means that the first bad version can only live in the 
    left half of the data. We just narrow our searching area into the left half of the current data
    which is (left, mid-1)
    5. Return -1 will never happen 

    Time Complexity : O(log N)_Binary Search We are checking the mid index instead of checking every elements
    Space Complexity : O(1) We are not using extra space

  */
