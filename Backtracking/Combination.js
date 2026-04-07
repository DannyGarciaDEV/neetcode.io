
// Combination Sum
// Medium
// Topics
// Company Tags
// Hints
// You are given an array of distinct integers nums and a target integer target. Your task is to return a list of all unique combinations of nums where the chosen numbers sum to target.

// The same number may be chosen from nums an unlimited number of times. Two combinations are the same if the frequency of each of the chosen numbers is the same, otherwise they are different.

// You may return the combinations in any order and the order of the numbers in each combination can be in any order.

// Example 1:

// Input:
// nums = [2,5,6,9]
// target = 9

// Output: [[2,2,5],[9]]
// Explanation:
// 2 + 2 + 5 = 9. We use 2 twice, and 5 once.
// 9 = 9. We use 9 once.

// Example 2:

// Input:
// nums = [3,4,5]
// target = 16

// Output: [[3,3,3,3,4],[3,3,5,5],[4,4,4,4],[3,4,4,5]]
// Example 3:

// Input:
// nums = [3]
// target = 5

// Output: []
// Constraints:

// All elements of nums are distinct.
// 1 <= nums.length <= 20
// 2 <= nums[i] <= 30
// 2 <= target <= 30

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        function backtrack(start, current, total) {
            // ✅ Base case: found a valid combination
            if (total === target) {
                result.push([...current]);
                return;
            }

            // 🚫 Exceeded target
            if (total > target) return;

            // 🔁 Explore further combinations
            for (let i = start; i < nums.length; i++) {
                current.push(nums[i]);
                backtrack(i, current, total + nums[i]); // can reuse same element
                current.pop(); // backtrack
            }
        }

        backtrack(0, [], 0);
        return result;
    }
}
