// https://leetcode.com/problems/sort-colors/description/

var sortColors = function(nums) {
    
    const count = new Array(3).fill(0);
    for (let color of nums) {
        count[color]++;
    }

    let idx = 0;

    for (let i=0; i<count.length; i++) {
        for (let j=0; j<count[i]; j++) {
            nums[idx] = i;
            idx++;
        }
    }

    return nums;
};

// Time: O(n) where n is the length of nums
// Space: O(1)