// https://leetcode.com/problems/subsets/

var subsets = function(nums) {
    
    let res = [];
    let subset = [];
    const dfs = function(i) {
        if (i >= nums.length) {
            res.push([...subset]);
            return [res, subset];
        }

        subset.push(nums[i]);
        dfs(i+1);

        subset.pop();
        dfs(i+1)
    }

    dfs(0);
    return res;
};

// Time: O(n*2^n) where n is the length of nums;
// Space: O(n) where n is the length of nums;