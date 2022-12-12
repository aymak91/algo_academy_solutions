// https://leetcode.com/problems/search-in-rotated-sorted-array/

const search = function(nums, target, left = 0, right = nums.length - 1) {
    if (left === right) return nums[left] === target ? left : -1;
    
    const mid = Math.floor(left + (right-left)/2);
    
    if (nums[mid] === target) return mid;
    
    if (nums[left] <= nums[mid]) {
        if (target > nums[mid] || target < nums[left]) {
            return search(nums, target, mid+1, right)
        } else {
            return search(nums, target, left, mid-1)
        }
    } else {
        if (target < nums[mid] || target > nums[right]) {
            return search(nums, target, left, mid-1)
        } else {
            return search(nums, target, mid+1, right)
        }
    }
};

// Time: O(log(n)) where n is the length of nums
// Space: O(log(n)) where n is the length of nums

var searchIterative = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (target === nums[mid]) return mid;
        
        if (nums[left] <= nums[mid]) {
            if (target > nums[mid] || target <nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (target < nums[mid] || target > nums[right]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    
    return -1;
};

// Time: O(log(n)) where n is the length of nums
// Space: O(1)