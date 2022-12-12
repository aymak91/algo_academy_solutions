// https://leetcode.com/problems/top-k-frequent-elements/description/

var topKFrequent = function(nums, k) {
    
    const count = new Map();
    const bucketSort = new Array(nums.length+1);
    const topK = [];

    for (let ele of nums) {
        if (!count.has(ele)) count.set(ele, 0);
        count.set(ele, count.get(ele) + 1);
    }

    for (let tuple of count) {
        const freq = tuple[1];
        const num = tuple[0];

        if (!bucketSort[freq]) bucketSort[freq] = new Array();
        bucketSort[freq].push(num);
    }

    for (let i=bucketSort.length-1; i>=0; i--) {
        if (!bucketSort[i]) continue;
        for (let num of bucketSort[i]) {
            topK.push(num);
            k--;
            if (k === 0) return topK;
        }
    }
    
    return topK;

};

// Time: O(n) where n is the size of nums
// Space: O(n) where n is the size of nums