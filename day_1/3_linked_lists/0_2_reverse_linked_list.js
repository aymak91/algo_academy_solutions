// https://leetcode.com/problems/reverse-linked-list/

const reverseList = function(head) {
    
    let current = head;
    let prev = null;
    
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};

// Time: O(n) where n is the number of nodes
// Space: O(1)

var reverseListRecursive = function(head, prev = null) {
    if (head === null) return prev;

    const next = head.next;
    head.next = prev;
    return reverseListRecursive(next, head);
};

// Time: O(n) where n is the number of nodes
// Space: O(n) where n is number of nodes