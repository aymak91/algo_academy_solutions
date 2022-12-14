// https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/

var goodNodes = function(root, maxVal = root.val) {
    if (!root) return 0;

    let res = root.val >= maxVal ? 1 : 0;

    maxVal = Math.max(maxVal, root.val);
    res += goodNodes(root.left, maxVal);
    res += goodNodes(root.right, maxVal);
    
    return res;
};

// Time: O(n) where n is the number of nodes
// Space: O(n) where n is the number of nodes