let bubbleSort = (nums) => {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (nums[j] > nums[j + 1]) {
                let tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = tmp;
            }
        }
    }
    return nums;
};

// Time: O(n^2) where n is the length of nums
// Space: O(1)