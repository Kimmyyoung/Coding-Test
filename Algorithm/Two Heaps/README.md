As the name suggests, the two heaps pattern uses either two min-heaps, two max-heaps or a min-heap and a max-heap simultaneously to solve the problem.

A min-heap is used to find the smallest element of a set of data. and a max-heap is used to find largest element.

Both heaps takes O(log K) time to insert an element. O(log K) time to pop element, and give O(1) time access to the smallest or largest element.

In some problems, we're given a set of data such that it can be divided into two parts. We can either use the first part to find the smallest element using the min-heap and the second part to find the largest element using the max-heap, or we can do the reverse and use the first part to find the largest element using the max-heap, or we can do the reverse and use the first part to find the largest element using the max-heap, or we can do the reserve and use the first part to find the largest element using the max-heap and the second part to find the smallest element usigng the min-heap.

There might be cases where we need to find the two largest numbers from two different data sets. We'll use two max-heaps to store two different data sets in that case. In other cases, we might need to find the two smallest numbers from two different data sets, and then we would use two min-heaps.

*** Real world Problems

1. Video Streaming : During a user session, there is often a possibility that packet drops and buffering might occur. We want to record the median number of buffering events that might occur in a particular session, which could then be used to improve the user experience.

2. Netflix : As part of a demographic study, we're interested in the median age of our viewers. We want to implement a functionality whereby the median age can be updated efficiently whenever a new user signup for video streaming.

