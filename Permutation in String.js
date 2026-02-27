// You are given two strings s1 and s2.

// Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.

// Both strings only contain lowercase letters.

// Example 1:

// Input: s1 = "abc", s2 = "lecabee"

// Output: true
class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const n1 = s1.length, n2 = s2.length;
        if (n1 > n2) return false;

        const s1Count = Array(26).fill(0);
        const windowCount = Array(26).fill(0);
        const aCharCode = 'a'.charCodeAt(0);

        // Count frequency for s1
        for (let i = 0; i < n1; i++) {
            s1Count[s1.charCodeAt(i) - aCharCode]++;
            windowCount[s2.charCodeAt(i) - aCharCode]++;
        }

        // Helper function to compare two arrays
        const matches = (arr1, arr2) => {
            for (let i = 0; i < 26; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
        };

        if (matches(s1Count, windowCount)) return true;

        // Slide the window
        for (let i = n1; i < n2; i++) {
            windowCount[s2.charCodeAt(i) - aCharCode]++;           // add new char
            windowCount[s2.charCodeAt(i - n1) - aCharCode]--;     // remove old char
            if (matches(s1Count, windowCount)) return true;
        }

        return false;
    }
}
