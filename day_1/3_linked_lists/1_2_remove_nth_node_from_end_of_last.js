// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

var removeNthFromEnd = function(head, n) {


    let dummyHead = new ListNode();
    dummyHead.next = head;
    
    let fastP = head;
    let slowP = dummyHead;
    
    while (n > 0) {
        fastP = fastP.next;
        n--;
    }
    
    while (fastP !== null) {
        fastP = fastP.next;
        slowP = slowP.next;
    }
    
    slowP.next = slowP.next.next;
    
    return dummyHead.next;

};

// Time: O(n) where n is the number of nodes
// Space: O(1)

