// https://leetcode.com/problems/maximum-depth-of-binary-tree/

const maxDepth = (root) => {
    if (root === null) return 0;
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    return Math.max(left, right) + 1;
    
}


// Time: O(n) where n is the number of nodes in the tree
// Space: O(n) where n is the number of nodes in the tree