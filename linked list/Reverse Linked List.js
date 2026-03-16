// Reverse Linked List
// Solved 
// Easy
// Topics
// Company Tags
// Hints
// Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

// Example 1:

// Input: head = [0,1,2,3]

// Output: [3,2,1,0]
// Example 2:

// Input: head = []

// Output: []
// Constraints:

// 0 <= The length of the list <= 1000.
// -1000 <= Node.val <= 1000
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr !== null) {
            let nextTemp = curr.next; // store next node
            curr.next = prev;         // reverse pointer
            prev = curr;              // move prev forward
            curr = nextTemp;          // move curr forward
        }

        return prev;
    }
}