// https://leetcode.com/problems/minimum-size-subarray-sum/description/

var minSubArrayLen = function(target, nums) {
    let left = 0;
    let total = 0;
    let res = Infinity;

    for (let right=0; right<nums.length; right++) {
        total += nums[right];

        while (total >= target) {
            res = Math.min(right-left+1, res);
            total -= nums[left];
            left++;
        }
    }

    return res === Infinity ? 0 : res;
};

// Time: O(n) where n is the length of nums
// Space: O(1)