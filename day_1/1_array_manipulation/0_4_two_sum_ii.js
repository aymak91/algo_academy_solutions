// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum > target) {
            right--;
        } else if (sum < target) {
            left++
        } else {
            return [left+1, right+1]
        }
    }
};

// Time: O(n) where n is the length of numbers
// Space: O(1)