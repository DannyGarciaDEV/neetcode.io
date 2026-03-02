// Valid Parentheses
// Solved 
// Easy
// Topics
// Company Tags
// Hints
// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

// The input string s is valid if and only if:

// Every open bracket is closed by the same type of close bracket.
// Open brackets are closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Return true if s is a valid string, and false otherwise.

// Example 1:

// Input: s = "[]"

// Output: true
// Example 2:

// Input: s = "([{}])"

// Output: true
// Example 3:

// Input: s = "[(])"

// Output: false
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            ')': '(',
            ']': '[',
            '}': '{'
        }

        const stack = []

        for(let ch of s){
            if(ch in pairs){
                const top = stack.length ? stack.pop() : '#'
                if(top !== pairs[ch]) return false
            } else {
                stack.push(ch)
            }
        }
return stack.length === 0;
    }
}
