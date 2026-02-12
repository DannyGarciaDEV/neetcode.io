// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // Step 1: Frequency map
        const freq = new Map();
        for (let num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        // Step 2: Convert map → array and sort
        const sorted = [...freq.entries()].sort((a, b) => b[1] - a[1]);

        // Step 3: Take top k numbers
        return sorted.slice(0, k).map(entry => entry[0]);
    }
}
