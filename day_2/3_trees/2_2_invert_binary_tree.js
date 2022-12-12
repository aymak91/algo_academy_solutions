// https://leetcode.com/problems/invert-binary-tree/

var invertTree = function(root) {
    if (!root) return null;
    
    [root.left, root.right] = [root.right, root.left];
    
    if (root.left) invertTree(root.left);
    if (root.right) invertTree(root.right);
    
    return root;
};

// Time: O(n) where n is the number of nodes in the tree
// Space: O(n) where n is the number of nodes in the tree