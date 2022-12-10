// https://leetcode.com/problems/longest-consecutive-sequence/description/

const longestConsecutive = function(nums) {
    const numsSet = new Set(nums);
    let longestSequence = 0;

    for (let i=0; i<nums.length; i++) {
        const num = nums[i];
        const prev = num - 1;
        let next = num + 1;
        let sequence = 1;

        if (!numsSet.has(prev)) {
            while (numsSet.has(next)) {
                sequence++;
                next++;
            }
            longestSequence = Math.max(longestSequence, sequence);
        }
    }

    return longestSequence;
};

// Time: O(n) where n is the length of nums
// Space: O(n) where n is the length of nums