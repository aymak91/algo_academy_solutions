// https://leetcode.com/problems/linked-list-cycle/

const hasCycle = function(head) {
    if (head === null || head.next === null) return false;
    let [slow, fast] = [head, head];
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
};

// Time: O(n) where n is the number of nodes
// Space: O(1)