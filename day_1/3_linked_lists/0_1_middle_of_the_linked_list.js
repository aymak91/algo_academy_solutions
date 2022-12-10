// https://leetcode.com/problems/middle-of-the-linked-list/description/

var middleNode = function(head) {
    let slow = head;
    let fast = slow;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

// Time: O(n) where n is the number of nodes
// Space: O(1)