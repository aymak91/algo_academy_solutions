// https://leetcode.com/problems/binary-tree-level-order-traversal/

const levelOrder = function(root) {

    const stack = [root];
    const result = [];
    
    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);
        
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
        
    }
    
    return result
    
};

// Time: O(n) where n is the number of nodes in the tree
// Space: O(n) where n is the number of nodes in the tree

// DFS iterative
// notice that DFS must push right first if we want to access left first
const levelOrderDFS = function(root) {
    if (!root) return [];
    
    const stack = [{node: root, level: 0}];
    const output = [];
    
    while (stack.length > 0) {
        const {node, level} = stack.pop();
        if (!output[level]) output.push([]);
        output[level].push(node.val);
        
        if (node.right !== null) stack.push({node: node.right, level: level+1});
        if (node.left !== null) stack.push({node: node.left, level: level+1});
    }
    
    return output;
};

// DFS recursive
const levelOrderRecursive = function(root) {
    const levels = [];
      dfsHelper(root, levels, 0);
      return levels;
};

const dfsHelper = (root, levels, levelNum) => {
  if (!root) return;
  
  if (levelNum === levels.length) {
    levels.push([root.val]);
  } else {
    levels[levelNum].push(root.val);
  }
  
  dfsHelper(root.left, levels, levelNum + 1);
  dfsHelper(root.right, levels, levelNum + 1);
}