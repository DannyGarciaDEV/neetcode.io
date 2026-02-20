// Container With Most Water
// Solved 
// Medium
// Topics
// Company Tags
// Hints
// You are given an integer array heights where heights[i] represents the height of the 
// i
// t
// h
// i 
// th
//   bar.

// You may choose any two bars to form a container. Return the maximum amount of water a container can store.

// Example 1:

class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let max = 0;

    while (left < right) {
      // Width of container
      let width = right - left;

      // Height is the shorter of the two lines
      let height = Math.min(heights[left], heights[right]);

      // Area formula
      let area = width * height;
      max = Math.max(max, area);

      // Move the pointer with the shorter line
      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    }

    return max;
  }
}