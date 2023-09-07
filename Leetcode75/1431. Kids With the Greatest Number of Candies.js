/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    let greatestValue = Math.max(...candies);
    //[2,3,5,1,3] = 5
    let res = [];

    for(let i=0; i<candies.length; i++){
        if(candies[i]+extraCandies >= greatestValue) {
            res.push(true);
        }else{
            res.push(false);
        };
    };

    return res;

};


/*
Intuition
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.

Approach
Find the greatestNumber of the array (candies)
Create new array to result
Compare if the value (ith of candies + extracandies) is greater than greatestNumber or not, if so, push the 'true' to the new array, if not, push the 'false' to the new array


Complexity
Time complexity: O(N)
Space complexity: O(N)
*/