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