// https://leetcode.com/problems/binary-search/description/

const search = function(nums, target, left = 0, right = nums.length) {
    if (left >= right) return nums[right] === target ? right : -1;
   const pivot = left + Math.floor((right - left)/2);
   if (nums[pivot] === target) return pivot;
   if (target < nums[pivot]) return search(nums, target, left, pivot - 1);
   if (target > nums[pivot]) return search(nums, target, pivot + 1, right);
};

// Time: O(logn) where n is the length of nums
// Space: O(logn) where n is the length of nums

const searchIterative = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let pivot = left + Math.floor((right - left)/2)
        if (nums[pivot] === target) return pivot;
        if (target < nums[pivot]) right = pivot - 1;
        if (target > nums[pivot]) left = pivot + 1;
    }
    return -1;
};

// Time: O(logn) where n is the length of nums
// Space: O(1)