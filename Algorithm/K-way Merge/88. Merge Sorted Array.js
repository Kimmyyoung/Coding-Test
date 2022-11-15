/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let result = [];
    
    //nums1 = [1,2,3,0,0,0] result = [1,2,3] 
    for(let i=0; i<m; i++) {
        result.push(nums1[i]);
    };
    
    
    for(let j=0; j<n; j++) {
        result.push(nums2[j]);
    };
    
    result.sort(function (a,b) { return a-b;});

    return result;
};


/*
    Time Complexity : O((m+n) log(m+n)) the whole size of resule array is m+n;
    Space : O(1), No extra space is used.
    
    1. Create an array arr3[] of size n1 + n2.
    2. Copy all n1 elements of arr1[] to arr3[]
    3. Traverse arr2[] and one by one insert elements
*/
