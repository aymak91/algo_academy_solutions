// https://leetcode.com/problems/container-with-most-water/description/

const maxArea = function(height) {
    let maxWater = 0;
    
    let left = 0;
    let right = height.length - 1
    
    while (left < right) {
        const shorter = Math.min(height[right], height[left]);
        const area = (right - left) * shorter;
        if (area > maxWater) maxWater = area;
        
        height[left] >= height[right] ? right-- : left++;
    }
    
    return maxWater;
};

// Time: O(n) where n is the length of height
// Space: O(1)