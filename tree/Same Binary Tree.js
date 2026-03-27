// Same Binary Tree
// Solved 
// Easy
// Topics
// Company Tags
// Hints
// Given the roots of two binary trees p and q, return true if the trees are equivalent, otherwise return false.

// Two binary trees are considered equivalent if they share the exact same structure and the nodes have the same values.

// Example 1:



// Input: p = [1,2,3], q = [1,2,3]

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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) return true;     // both null
        if (!p || !q) return false;    // one null
        if (p.val !== q.val) return false; // values different

        return this.isSameTree(p.left, q.left) &&
               this.isSameTree(p.right, q.right);
    }
}