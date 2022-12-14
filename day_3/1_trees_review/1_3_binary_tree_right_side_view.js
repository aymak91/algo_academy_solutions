// https://leetcode.com/problems/binary-tree-right-side-view/description/

var rightSideView = function(root) {
    if (!root) return [];
    
    const queue = [root];
    const output = [];
    
    while (queue.length > 0) {
        const length = queue.length;
        let rightSide = null;

        for (let i=0; i<length; i++) {
            const node = queue.shift();
            rightSide = node;
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }

        if (rightSide) output.push(rightSide.val);
    }
    
    return output;
};

// Time: O(n) where n is the number of nodes
// Space: O(n) where n is the number of nodes