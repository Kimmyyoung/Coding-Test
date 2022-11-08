Merge Interval

A simple approach is to start from the first interval and compare it with all other intervals for overlapping. if it overlaps with any other intervals, then remove the other interval from the list and merge the other into the first interval. Repeat the same steps for the remaining intervals after the first. This approach cannot be implemented in better then O(n*2) time.

The idea to solve this problem is, first sort the intervals according to the starting time. Once we have the sorted intervals, we can combine all intervals in a linear traversal. The idea is, in sorted array of intervals, if interval[i] doesn't overlap with interval[i-1], then interval[i+1] cannot overlap with inverval because starting time of interval must be greater than or equal to interval.

1. Sort the intervals based on the increasing order of starting time.
2. Push the first interval into a stack.
3. For each interval do the following : if the current interval does not overlap with the top of the stack then, push the current interval into the stack.
if the current interval overlap with the top of the stack then, update the stack top with the ending time of ther current interval.
4. the end stock contains the merged intervals


*** Stack : First In Last out

