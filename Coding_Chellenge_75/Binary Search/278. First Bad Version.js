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
    return function(n){
        //근데 왜 이거 시작을 이렇게 하는지 이걸 캐치해야할꺼같다.
        let start = 1, end = n, mid = 0;
        
        while (start <= end){
            mid = Math.floor((start + end)/2);
            
            
            if(isBadVersion(mid)) {
                if(isBadVersion(mid-1)) {end = mid - 1;}
                else{return mid;}
            }
            
            else start = mid+1;
                
        };
        
        
        
    }
    
    
};