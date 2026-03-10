// Binary Search
// Solved 
// Easy
// Topics
// Company Tags
// Hints
// You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

// Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

// Your solution must run in 
// O
// (
// l
// o
// g
// n
// )
// O(logn) time.

// Example 1:

// Input: nums = [-1,0,2,4,6,8], target = 4

// Output: 3
// Example 2:

// Input: nums = [-1,0,2,4,6,8], target = 3

// Output: -1
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        return mid; // target found
      } else if (nums[mid] < target) {
        left = mid + 1; // search right half
      } else {
        right = mid - 1; // search left half
      }
    }

    return -1; // target not found
  }
}