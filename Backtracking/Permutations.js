// Permutations
// Medium
// Topics
// Company Tags
// Hints
// Given an array nums of unique integers, return all the possible permutations. You may return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]

// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [7]

// Output: [[7]]
// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = [];
        const used = new Array(nums.length).fill(false);

        function backtrack(path) {
            // if permutation is complete
            if (path.length === nums.length) {
                result.push([...path]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (used[i]) continue;

                used[i] = true;
                path.push(nums[i]);

                backtrack(path);

                // undo choice
                path.pop();
                used[i] = false;
            }
        }

        backtrack([]);
        return result;
    }
}