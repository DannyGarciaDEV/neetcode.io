// Given a binary tree, return true if it is height-balanced and false otherwise.

// A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

// Example 1:



// Input: root = [1,2,3,null,null,4]

// Output: true
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        function checkHeight(node) {
            if (!node) return 0;

            const leftHeight = checkHeight(node.left);
            if (leftHeight === -1) return -1; // left subtree not balanced

            const rightHeight = checkHeight(node.right);
            if (rightHeight === -1) return -1; // right subtree not balanced

            if (Math.abs(leftHeight - rightHeight) > 1) return -1; // current node not balanced

            return 1 + Math.max(leftHeight, rightHeight);
        }

        return checkHeight(root) !== -1;
    }
}