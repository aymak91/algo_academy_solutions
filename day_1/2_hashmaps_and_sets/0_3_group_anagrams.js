// https://leetcode.com/problems/group-anagrams/description/

var groupAnagrams = function(strs) {
    
    const anagrams = {};
    
    for (let word of strs) {
        const key = letterCount(word);
        if (!anagrams[key]) anagrams[key] = [];
        anagrams[key].push(word);
    }
    
    return Object.values(anagrams);
};

const letterCount = function(word) {
    
    const key = new Array(26).fill(0);
    
    for (let i=0; i<word.length; i++) {
        const charCode = word.charCodeAt(i) - "a".charCodeAt(0);
        key[charCode]++;
    }
    
    return key;
}

// Time: O(m*n) where n is the number of words in strs and m is the length of the longest word
// Space: O(n) where n is the number of words in strs