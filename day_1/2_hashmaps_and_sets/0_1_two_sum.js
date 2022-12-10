// https://leetcode.com/problems/two-sum/

const twoSum = function(nums, target) {
    const hash = {};
    
    for (let i=0; i<nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (hash[complement] !== undefined) return [i, hash[complement]]
        hash[num] = i;
    }
};

// Time: O(n) where n is the length of nums
// Space: O(n) where n is the length of nums