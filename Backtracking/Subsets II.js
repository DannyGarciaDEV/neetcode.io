// You are given an array nums of integers, which may contain duplicates. Return all possible subsets.

// The solution must not contain duplicate subsets. You may return the solution in any order.

// Example 1:

// Input: nums = [1,2,1]

// Output: [[],[1],[1,2],[1,1],[1,2,1],[2]]
// Example 2:

// Input: nums = [7,7]

// Output: [[],[7], [7,7]]
// Constraints:

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b); // sort to handle duplicates
        const result = [];

        function backtrack(start, path) {
            result.push([...path]);

            for (let i = start; i < nums.length; i++) {
                // skip duplicates
                if (i > start && nums[i] === nums[i - 1]) continue;

                path.push(nums[i]);
                backtrack(i + 1, path);
                path.pop();
            }
        }

        backtrack(0, []);
        return result;
    }
}