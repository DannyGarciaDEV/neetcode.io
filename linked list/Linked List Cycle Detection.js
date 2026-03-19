// Linked List Cycle Detection
// Easy
// Topics
// Company Tags
// Hints
// Given the beginning of a linked list head, return true if there is a cycle in the linked list. Otherwise, return false.

// There is a cycle in a linked list if at least one node in the list can be visited again by following the next pointer.

// Internally, index determines the index of the beginning of the cycle, if it exists. The tail node of the list will set it's next pointer to the index-th node. If index = -1, then the tail node points to null and no cycle exists.

// Note: index is not given to you as a parameter.

// Example 1:



// Input: head = [1,2,3,4], index = 1

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;          // move 1 step
            fast = fast.next.next;     // move 2 steps

            if (slow === fast) {
                return true;           // cycle detected
            }
        }

        return false;                  // reached end → no cycle
    }
}