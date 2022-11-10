/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let prev = null, curr = head, next = null;
    //define three pointer 
    //-> We can't use previous linked in linked list but we need to save the value 
    
    while(curr != null) {
        next = curr.next; //save next value  
        curr.next = prev; //change the linked pointer
        prev = curr; //advance prev pointer to current
        curr = next; 
    }
    return prev;
};


/*
    The idea is to use three pointer curr, prev, and next to keep track of nodes
    to updatew reverse links

    1. Initialize three pointers prev as null, current as head, and next as null
    2. Iterate through the linked list. In a loop, do the following
    - Before changing the next of curr, store next node
    ( next = current.next )
    - Now update the next pointer of current to the prev
    ( current = next.prev )
    - Update prev as curr and curr as next
    ( prev = curr , curr = next )

    Time Complexity : O(N) Traversing over the linklist of size N
    Space Complexity : O(1)

    There is two more solution 
    1. Reverse Linked List with Recursion 
    - TC : O(N) | SC : O(N)
    2. Reverse Linked List with Stack
    - TC : O(N) | SC : O(N)
    



*/

