https://leetcode.com/problems/unique-paths/description/
const uniquePaths = function(m, n) {    
    // valid path
    if (m===1 || n===1) return 1;
    // invalid path
    if (m===0 || n===0) return 0;
    
    const left = uniquePaths(m-1, n, memo);
    const right = uniquePaths(m, n-1, memo);
    
    return left+right;
};

// Time: O(2^(m+n)) where m and n are the number of rows and cols
// Space: O(m+n) where m and n are the number of rows and cols

// Dynamic Programmming
const uniquePaths2 = function(m, n, memo = {}) {
     
    const key = m + ',' + n; // '2,3';
    if (key in memo) return memo[key];
    
    // valid path
    if (m===1 || n===1) return 1;
    // invalid path
    if (m===0 || n===0) return 0;
    
    const left = uniquePaths2(m-1, n, memo);
    const right = uniquePaths2(m, n-1, memo);
    
    memo[key] = left+right;
    return memo[key];
};

// Time: O(m*n)) where m and n are the number of rows and cols
// Space: O(m+n) where m and n are the number of rows and cols