// https://leetcode.com/problems/merge-two-sorted-lists/

const mergeTwoListsIterative = function(list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    
    let tail;
    let current1;
    let current2;
    let firstNode;
    
    
    if (list1.val < list2.val) {
        tail = list1;
        firstNode = list1;
        current1 = list1.next;
        current2 = list2;
    } else {
        tail = list2;
        firstNode = list2;
        current1 = list1;
        current2 = list2.next
    }
    
    
    while (current1 !== null && current2 !== null) {
        
        if (current1.val < current2.val) {
            tail.next = current1;
            current1 = current1.next;
        } else {
            tail.next = current2;
            current2 = current2.next;
        }
        tail = tail.next;
        
    }
    
    tail.next = current1 !== null ? current1 : current2;
    
    return firstNode;
    
};


// Time: O(m+n) where m and n are the number of nodes from list1 and list2
// Space: O(1)

const mergeTwoLists = function(list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    
    if (list1.val < list2.val) {
        const next1 = list1.next;
        list1.next = mergeTwoLists(next1, list2)
        return list1;
    } else {
        const next2 = list2.next;
        list2.next = mergeTwoLists(list1, next2)
        return list2;
    }
    
};


// Time: O(m+n) where m and n are the number of nodes from list1 and list2
// Space: O(m+n) where m and n are the number of nodes from list1 and list2