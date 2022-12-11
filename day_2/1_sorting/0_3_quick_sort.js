const sortArray = function(nums, start = 0, end = nums.length-1) {
    if (end - start + 1 <= 1) return nums;

    let pivot = nums[end];
    let left = start;

    for (let i=start; i<=end; i++) {
        if (nums[i] < pivot) {
            tmp = nums[left];
            nums[left] = nums[i];
            nums[i] = tmp;
            left++;
        }
    }

    nums[end] = nums[left];
    nums[left] = pivot;
    
    sortArray(nums, start, left-1);
    sortArray(nums, left+1, end);

    return nums;
}

// Time: O(n^2) worst case, O(n*log(n)) amortized,  where n is the length of nums
// Space: O(1)