// Diameter of Binary Tree
// Solved 
// Easy
// Topics
// Company Tags
// Hints
// The diameter of a binary tree is defined as the length of the longest path between any two nodes within the tree. The path does not necessarily have to pass through the root.

// The length of a path between two nodes in a binary tree is the number of edges between the nodes. Note that the path can not include the same node twice.

// Given the root of a binary tree root, return the diameter of the tree.

// Example 1:
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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let diameter = 0;

        function dfs(node) {
            if (!node) return 0;

            const left = dfs(node.left);
            const right = dfs(node.right);

            // update diameter
            diameter = Math.max(diameter, left + right);

            // return height
            return 1 + Math.max(left, right);
        }

        dfs(root);
        return diameter;
    }
}