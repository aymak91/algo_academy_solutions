// https://leetcode.com/problems/lru-cache/

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.hash = {};
        this.DLL = new DoublyLikedlist();
    }
    
    get(key) {
        if (!this.hash[key]) return -1;
        this.DLL.remove(this.hash[key]);
        this.hash[key] = this.DLL.push(this.hash[key]);
        return this.hash[key].val;
        
    }
    
    put(key, value) {
        if (this.hash[key]) this.DLL.remove(this.hash[key]);
        const newNode = new Node(key, value);
        this.hash[key] = this.DLL.push(newNode);
        console.log(this.DLL.length, this.capacity)
        if(this.DLL.length > this.capacity) {
            const lru = this.DLL.head.next;
            delete this.hash[lru.key];
            this.DLL.remove(lru);
            
        }
    }
      
}

class DoublyLikedlist {
    constructor() {
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        
        this.head.next = this.tail;
        this.tail.prev = this.head;
        
        this.length = 0
    }
    
    remove(node) {
        let prev = node.prev;
        let nxt = node.next;
        
        prev.next = nxt;
        nxt.prev = prev;
        
        this.length--;
    }
    
    push(node) {
        let prev = this.tail.prev;
        let nxt = this.tail;
        
        prev.next = node;
        nxt.prev = node;
        
        node.next = nxt;
        node.prev = prev;
        
        this.length++;
        return node;
    }
    
}

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null
    }
}