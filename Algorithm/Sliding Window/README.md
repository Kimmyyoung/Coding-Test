function slidingwindow (K, arr) {
  const result = [];
  let windowsum = 0.0;
  let windowStart = 0;
  for(let windowend = 0; windowend < arr.length; windowend++){
    windowsum += arr[windowend];
    if(windowend >= K -1) {
      result.push(windowsum / K);
      windowsum -= arr[windowStart];
      windowStart++;
    }
  }
  
  console.log(result);
}


slidingwindow(5, [1,3,2,6,-1,4,1,8,2]);

****************

Time Complexity 
: Since for every element of the input array, we are calculating the sum of its next 'K' elements,
  the time complexity of the above alogorithm will be O(N * K) where 'N' is the number of elements in the input array.
  For the better solution, I would like to find the overlapping part. 
  the overlapping part will be evaluated twice. For example, overlapping elements between subarray (0-4) and subarray (1-5). Can we somehow use the sum we have calculated for the overlapping elements?
    
    The efficient way to solve this problem would be visualize each subarray as a sliding window of '5' elements. This means that we will slide the window by one element when we move on to the next subarray.
  To reuse the sum from the previous subarray, we will subtract the element going out of the window and add the element now being included in the sliding window. This will save us from going through the whole subarray to find the sum and, as a result, the algorithm complexity will reduce to O(N)