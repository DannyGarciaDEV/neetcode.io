// Subsets
// Medium
// Topics
// Company Tags
// Hints
// Given an array nums of unique integers, return all possible subsets of nums.

// The solution set must not contain duplicate subsets. You may return the solution in any order.

// Example 1:

// Input: nums = [1,2,3]

// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [7]

// Output: [[],[7]]
// Constraints:

// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  subsets(nums) {
    const res = [];

    const backtrack = (start, current) => {
      // Add a copy of current subset to the result
      res.push([...current]);

      // Explore further elements to include
      for (let i = start; i < nums.length; i++) {
        current.push(nums[i]); // include nums[i]
        backtrack(i + 1, current); // move to next element
        current.pop(); // backtrack (remove last element)
      }
    };

    backtrack(0, []);
    return res;
  }
}
