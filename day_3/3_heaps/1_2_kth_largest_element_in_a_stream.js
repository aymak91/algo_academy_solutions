// https://leetcode.com/problems/kth-largest-element-in-a-stream/

class KthLargest {
    constructor(k, nums) {
        
        this.k=k;
        this.minHeap = new minHeap();
        
        this.minHeap.heapify(nums);
        
        while (this.minHeap.length() > this.k) {
            this.minHeap.poll();
        }
    }
    
    add(val) {
        this.minHeap.push(val);
        if (this.minHeap.length() > this.k) {
            this.minHeap.poll(minHeap);
        }
        return this.minHeap.data[0];
    }
}

class minHeap {
    constructor() {
        this.data = [];
    }

    heapify(nums) {
        
        for (let num of nums) {
            this.push(num);
        }
    }
    
    length() {
        return this.data.length;
    }

    getParentIndex(i) {
        return Math.floor((i-1)/2)
    }

    getLeftChildIndex(i) {
        return i*2+1;
    }

    getRightChildIndex(i) {
        return i*2+2;
    }

    swap(i1, i2) {
        const temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }

    push(val) {
        this.data[this.data.length] = val;
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIdx = this.data.length-1;

        while (this.data[currentIdx] < this.data[this.getParentIndex(currentIdx)]) {
            this.swap(currentIdx, this.getParentIndex(currentIdx));
            currentIdx = this.getParentIndex(currentIdx);
        }
    }

    poll() {
        const maxValue = this.data[0];

        this.data[0] = this.data[this.data.length-1];
        this.data.length--;
        this.heapifyDown();
    
        return maxValue;
    }

    heapifyDown() {
        let currentIdx = 0;

        while (this.data[this.getLeftChildIndex(currentIdx)] != undefined) {
            let smallestChildIdx = this.getLeftChildIndex(currentIdx);

            if (this.data[this.getRightChildIndex(currentIdx)] != undefined && this.data[this.getRightChildIndex(currentIdx)] < this.data[this.getLeftChildIndex(currentIdx)])  {
                smallestChildIdx = this.getRightChildIndex(currentIdx);
            }

            if (this.data[currentIdx] > this.data[smallestChildIdx]) {
                this.swap(currentIdx, smallestChildIdx);
                currentIdx = smallestChildIdx;
            } else {
                return;
            }
        }
    }

}