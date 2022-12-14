/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
      
    //exeption 
    if(!nums.length) return 0;


    nums.sort((a,b) => {return a-b;});

    return search(nums); 
};

var search = (nums) => {
    let [ maxscore, score ] = [ 1,1 ];

    for(let i=0; i<nums.length; i++) {
        const isPrevDuplicate = nums[i-1] === nums[i];

        if(isPrevDuplicate) continue;

        const isStreak = nums[i] === ((nums[i-1]) + 1);
        if(isStreak) {score++; continue;}
        
        maxscore = Math.max(maxscore,score);
        score = 1;
    }

    return Math.max(maxscore, score);
}


// * Sort - HeapSort Space O(1) | QuickSort Space O(log(K))
//  * Greedy - Max Score
//  * Time O (N * log(N)) | Space O(1)
