/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {

    
    let dummyhead = new ListNode();
    //Another Way to make List : dummyhead = {next: null}
      let cur = dummyhead;
   
    
    while(l1 != null && l2 != null) {
      if(l1.val <= l2.val) {
        cur.next = l1;
        l1 = l1.next;
      }else if(l1.val > l2.val) {
        cur.next = l2;
        l2 = l2.next;
      }
      
      cur = cur.next;
    }
    if(l1 != null) cur.next = l1;
    else cur.next = l2;
    
    return dummyhead.next;
          
  
  };