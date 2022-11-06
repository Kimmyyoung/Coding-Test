/*
Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

If we know the length of the LinkedList cycle, we can find the start of the cycle through the following steps;

1. Take a two pointer, Let's call them pointer1 and pointer2
2. Initialize both pointers to point to the start of the Linkedlist
3. We can find the length of LinkedList cycle using approach discussed in LinkedList Cycle. Let's assume that the length of the cycle is 'K' nodes
4. Move pointer2 ahead by 'K' nodes
5. Now, keep increming pointer1 and pointer2 untill they both meet.
6. As pointer2 is 'K' nodes ahead of pointer1, which means, pointer2 must have completed one loop in the cycle when both pointer meet. Their meeting point will be 
start of the Cycle
*/

class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
}

function find_cycle_start(head) {
    let slow = head, fast = head; 
    cycle_length = 0;

    while ((fast !== null) && (fast.next !== null)) {
        fast = fast.next.next;
        slow = slow.next;

        if(slow === fast) {
            cycle_length = caculate_cycle_length(slow);
            break;
        }
    }
    return find_start (head, cycle_length);

}

function calculate_cycle_length(slow) {
    let current = slow, cycle_length = 0;
    while (true) {
        current = current.next;
        cycle_length += 1;
        if(current === slow) {
            break;
        }
    }
    return cycle_length;
}

function find_start (head, cycle_length) {
    let pointer1 = head, 
    pointer2 = head;
    while(cycle_length > 0) {
        pointer2 = pointer2.next;
        cycle_length -= 1;
    }

    while(pointer1 !== pointer2) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
    return pointer1;
}




/*
    Time Complexity 
    : As we know, finding the cycle in LinkedList with N nodes and also finding the length of the cycle requires O(N) also, as we saw in the above algorithm, 
    We will need O(N) to find the start of the cycle. Therefore, the overall time complexity of our algorithm will be O(N);

    Space Complexity 
    : O(1)
*/