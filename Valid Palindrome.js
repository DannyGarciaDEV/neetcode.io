// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

// Example 1:

// Input: s = "Was it a car or a cat I saw?"

// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

// Example 2:

// Input: s = "tab a cat"

// Output: false
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
   isPalindrome(s) {
     // Normalize the string (optional: remove non-alphanumeric and lowercase)
    s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

    // Reverse the string
    let reversed = s.split("").reverse().join("");

    // Check if original and reversed are the same
    return s === reversed;
  
   }
}