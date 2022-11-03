/*
    We have a slow and fast pointer to traverse the LinkedList.
    In each iteration, the slow pointer moves one step and fast pointer move two steps
    This gives us two conclusions.

    1. If the LinkedList doesn't have a cycle in it, the fast pointer will reach the end
    of the LinkedList before the slow pointer to reveal that there is no cycle in the LinkedList

    2. The slow pointer will never be able to catch up to the fast pointer if there is no cycle in the LinkedList

    If Linkedlist has a cycle, the fast pointer enters the cycle first, followed by the slow pointer
    After this, both pointer will keep moving in the cycle infinitely, If at any stage both of these pointers
    meet, we can conclude that the LinkedList has a cycle in it. Let's analyze if it is possible for the two pointers to meet.

    When the fast pointer is approaching the slow pointer from behind we have two possibilities :
    1. The fast pointer is one step behind the slow pointer
    2. The fast pointer is two step behind the slow pointer

    All other distances between the fast and slow pointer will reduce to one of these two possibilities
    Let's analyze these scenarios, considering the fast pointer always moves first.


*/


class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  function has_cycle(head) {
    let slow = head,
      fast = head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) {
        return true; // found the cycle
      }
    }
    return false;
  }
  
  
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  console.log(`LinkedList has cycle: ${has_cycle(head)}`);
  
  head.next.next.next.next.next.next = head.next.next;
  console.log(`LinkedList has cycle: ${has_cycle(head)}`);
  
  head.next.next.next.next.next.next = head.next.next.next;
  console.log(`LinkedList has cycle: ${has_cycle(head)}`);


  /*
    Time Complexity
    : As we have concluded above, once the slow pointer enters the cycle,
    the fast pointer will meet the slow pointer in the same loop.`

    Therefore the time complexity of our algorithm will be O(N) where N is the total number of 
    nodes in the LinkedList

    Space Complexity 
    : O(1) 
 
  */
