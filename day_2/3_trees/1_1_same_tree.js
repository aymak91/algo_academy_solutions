// https://leetcode.com/problems/same-tree/

var isSameTree = function(p, q) {
    if ((!p && q) || (p && !q)) return false;
    if (!p && !q) return true;
    if (p.val !== q.val) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Time: O(n) where n is the number of nodes in the tree
// Space: O(n) where n is the number of nodes in the tree