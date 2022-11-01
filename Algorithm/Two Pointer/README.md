In problems where we deal with sorted arrays and need to find a set of elelments that fulfill certain constraints, the Two Pointer approach becomes quiet useful.

* When the sorted array is provided.

Given that the input array is sorted, an efficiend way would be to start with one pointer in the beginning and another pointer at the end. 
At every step, we will see if the numbers pointed by the two pointers add up to the target sum. If they do not, we will do one of the two things.

1. If the sum of the two numbers pointed by the two pointers is greater than the target sum. this means that we need a pair with a smaller sum.
So, to try more pairs, we ca devrement the end-pointer
2. If the sum of the two numbers pointed by the two pointers is smaller than the target sum. this means that we need a pair with a large sum. So, to try more pair,
We can increment the start-pointer

