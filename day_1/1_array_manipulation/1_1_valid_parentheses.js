// https://leetcode.com/problems/valid-parentheses/

const isValid = function(s) {
    
    const closeToOpen = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    
    const stack = [];
    
    for (let char of s) {
        if (char in closeToOpen) {
            const top = stack[stack.length-1];
            if (stack.length > 0 && top === closeToOpen[char]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};

// Time: O(n) where n is the length of s
// Space: O(n) where n is the length of s