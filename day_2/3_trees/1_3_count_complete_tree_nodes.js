// https://leetcode.com/problems/count-complete-tree-nodes/

var countNodes = function(root) {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 1;
    
    return countNodes(root.left) + countNodes(root.right) + 1;
};

// Time: O(n) where n is the number of nodes in the tree
// Space: O(n) where n is the number of nodes in the tree