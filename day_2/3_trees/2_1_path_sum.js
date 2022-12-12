// https://leetcode.com/problems/path-sum/description/

var hasPathSum = function(root, targetSum) {
    if (!root) return false;

    targetSum -= root.val;
    
    if (!root.left && !root.right) return targetSum === 0;
    
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

// Time: O(n) where n is the number of nodes in the tree
// Space: O(n) where n is the number of nodes in the tree