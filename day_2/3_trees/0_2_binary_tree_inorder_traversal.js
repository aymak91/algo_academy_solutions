// https://leetcode.com/problems/binary-tree-inorder-traversal/description/

var inorderTraversal = function(root) {
    if (!root) return [];
    
    let left = inorderTraversal(root.left);
    left.push(root.val);

    let right = inorderTraversal(root.right);
    return left.concat(right);
};

// Time: O(n) where n is the number of nodes in the tree
// Space: O(n) where n is the number of nodes in the tree