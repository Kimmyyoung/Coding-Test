/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
  
    intervals.push(newInterval);
    
    intervals.sort(function(a,b) { return a[0] - b[0]});
    
    const res = [intervals[0]];
    
    for(let i=0; i<intervals.length; i++) {
      const currentinterval = intervals[i];
      const lastInterval = res[res.length-1];
      
      if(currentinterval[0] <= lastInterval[1]) {
        lastInterval[1] = Math.max(currentinterval[1], lastInterval[1]);
      }else{
        res.push(currentinterval);
      }
    }
    
    return res;
  };

  /*
  1. The first thing we need to do is setup our initial values, Additionally, the intervals list can be empty.
  we can just return the new_interval, 
  
  Time Complexity : O(N) 
  Space Complexity : O(N) because of stack which is 'res'
  */