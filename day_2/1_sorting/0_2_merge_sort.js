const sortArray = function(nums) {
    if (nums.length < 2) return nums;

    const mid = Math.floor((nums.length) / 2)

    const left = sortArray(nums.slice(0, mid));
    const right = sortArray(nums.slice(mid));

    return merge(left, right);
};

const merge = function(left, right) {
    let merged = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
        }
    }

    return merged.concat(...left, ...right);
}

// Time: O(n*log(n)) where n is the length of nums
// Space: O(n*log(n)) where n is the length of nums