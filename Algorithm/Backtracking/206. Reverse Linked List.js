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
    let prev=null, current=head, next=null;
      //current = 1
      while(current !== null) {
          next = current.next;
          //next = 2 
          current.next = prev;
         //current.next = null
          prev = current; 
          //prev = 1 | current = 1 | current.next = null | next = 2 
          current = next;
          //prev = 1 | current = 2 | current.next = null | next = 2 ;
      }
      return prev;
      
  };
  
  // 1-2-3-4-5