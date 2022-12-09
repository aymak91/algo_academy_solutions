// https://leetcode.com/problems/contains-duplicate-ii/description/ 

const containsNearbyDuplicate = function(nums, k) {
    let window = new Set();
    let left = 0;

    for (let right=0; right<nums.length; right++) {
        if (right-left > k) {
            window.delete(nums[left])
            left++;
        }

        if (window.has(nums[right])) return true;
        window.add(nums[right]);
    }

    return false;
};

// Time: O(n) where n is the length of nums
// Space: O(n) where n is the length of nums