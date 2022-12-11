// https://leetcode.com/problems/fibonacci-number/description/


// Iterative
const fibIterative = function(n) {
    
    let prev = 0;
    let cur = 1;
    let i = 1;
    
    if (n === 0) return 0;

    while (i<n) {
        let sum = prev+cur;
        prev = cur;
        cur = sum;
        i++;
    }

    return cur;

};

// Time: O(n) where n is the input size
// Space: O(1)

// Recursive
const fib = function(n) {
    if (n===0) return 0;
    if (n===1) return 1;

    return fib(n-1) + fib(n-2);
};

// Time: O(2^n) where n is the input size
// Space: O(n) where n is the input size


// Dynamic Programming
const fibDyn = function(n, memo = {}) {
    if (n===0) return 0;
    if (n===1) return 1;
    if (memo[n]) return memo[n];
    memo[n] = fibDyn(n-1, memo) + fibDyn(n-2, memo);

    return memo[n];
};

// Time: O(n) where n is the input size
// Space: O(n) where n is the input size