// https://leetcode.com/problems/sort-characters-by-frequency/description/

var frequencySort = function(s) {
    const count = {};
    const bucketSort = new Array(27);
    let sortedString = '';

    for (let char of s) {
        if (!count[char]) count[char] = 0;
        count[char]++;
    }
    for (let char in count) {
        const freq = count[char];

        if (!bucketSort[freq]) bucketSort[freq] = new Array()
        bucketSort[freq].push(char);
    }

    for (let i=bucketSort.length-1; i>=0; i--) {
        if (!bucketSort[i]) continue;
        for (let char of bucketSort[i]) {
            for (let j=0; j<count[char]; j++) {
                sortedString += char;
            }
        }
    }

    return sortedString;
};

// Time: O(n) where n is the length of s
// Space: O(n) where n is the length of s