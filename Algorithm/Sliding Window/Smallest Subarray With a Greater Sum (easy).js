function smallest_subarray_sum(s, arr) {
    let minLength = Infinity;
    let windowSum = 0;
    let windowStart = 0; 
  
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd]; // add the next element
      
      // shrink the window as small as possible until the 'window_sum' is smaller than 's'
      while (windowSum >= s) {
        minLength = Math.min(minLength, windowEnd - windowStart + 1);
        windowSum -= arr[windowStart]
        windowStart += 1 // sliding the window
        }
      }
  
    if (minLength === Infinity) {
      return 0;
    }
    return minLength;
  }
  
/*
Time Complexity 
: The time colexity of the above algorithm is O(N). The outer 'for' loop runs all of elements and the 
inner 'while' loop prcesses each element only once; therefore, the time complexity of the algorithm is O(N+N)
which is O(N)

Space Complexity 
: The algorithm runs in constant space O(1)
*/
