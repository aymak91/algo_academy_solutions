// https://leetcode.com/problems/find-peak-element/description/

// Iterative
const findPeakElementIterative = function(nums) {
    
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2)
        
        if (nums[mid] < nums[mid+1]) left = mid+1;
        if (nums[mid] >= nums[mid+1]) right = mid;
    }
    return left;
};

// Time: O(log(n)) where n is the length of nums
// Space: O(1)

// Recursive
const findPeakElement = function(nums, left = 0, right = nums.length-1) {
    if (left === right) return left;
    let mid = Math.floor(left+(right-left)/2);
    if (nums[mid] > nums[mid+1]) return findPeakElement(nums, left, mid);
    return findPeakElement(nums, mid+1, right);
}

// Time: O(log(n)) where n is the length of nums
// Space: O(log(n)) where n is the length of nums