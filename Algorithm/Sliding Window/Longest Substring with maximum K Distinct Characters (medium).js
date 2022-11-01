/*
This problem follows the Sliding Window pattern, and we can use a similar dynamic sliding window strategy as discussed in Smallest Subarray with Greater than sum. 
We can use a Hashmap to remember frequency of each character we have processed. Here is how we will solve this problem.

1. Fist, we will insert chracter from the beginning of the staring until we have k distinct chracters in the Hashmap.
2. These chracters will constitute our sliding windows. We are asked to find the longest such window having no more than K distinct chracters. 
   We will remember the length of this window as the longest window so far.
3. After this, we will keep adding one chracter in the sliding window
4. In each step, we will try to shrink the window from the beginning if the count of distinct chracters in the Hashmap is larger than K.
 We will shrink the window until we have no more than k distinct chracters in the Hashmap. This is needed as we intend to find the longest window.
5. While shriking, we will devrement the chracter's frequency going out of the window ans remove it from the Hashmap if its frequency becomes zero.
6. At the end of each step, we will check if the current window length is the longest so far, and if so, remember its length

*/


function longestSubstring (str, k) {
    let windowstart = 0, maxlength = 0, charFrequency = {};

    for(let windowend = 0; windowend < str.length; windowend++) {
        const rightChar = str[windowend];
        if(!(rightChar in charFrequency)) charFrequency[rightChar] = 0;
        charFrequency[rightChar] += 1;
    

    while(Object.keys(charFrequency).length > k) {
        const leftChar = str[windowstart];
        charFrequency[leftChar] -= 1;
        if(charFrequency[leftChar] === 0) delete charFrequency[leftChar];
        windowstart += 1;
    }

    maxlength = Math.max(maxlength, windowend-windowstart+1);
    }

    console.log(maxlength);
}


/*
Time Complexity
: The above algorithm's time complexity will be O(N) where N is the number of characters in the input string. 
The outer for loop runs all characters,  and the inner while loop processes each characters only once,
therefore the time complexity of the algorithm will be O(N+N) which is equivalent to O(N) 

Space Complexity
: The algorithm's space complexity is O(K), as we will be storing a maximum of K+1 characters in the HashMap.
*/