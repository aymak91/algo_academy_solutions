// https://leetcode.com/problems/search-in-a-binary-search-tree/description/

var searchBST = function(root, val) {
    if (root === null) return null;

    if (val < root.val) {
        return searchBST(root.left, val);
    } else if (val > root.val) {
        return searchBST(root.right, val);
    } else {
        return root
    }
};

// Time: O(log(n)) where n is the number of nodes in the tree
// Space: O(log(n)) where n is the number of nodes in the tree