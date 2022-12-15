
// https://leetcode.com/problems/last-stone-weight/

var lastStoneWeight = function(stones) {
    
    let heap = new maxHeap();
    heap.heapify(stones);
    
    while (heap.length() > 1) {
        let first = heap.poll();
        let second = heap.poll();
        
        if (second < first) {
            heap.push(first - second);
        }
    }
    return heap.data[0] !== undefined ? heap.data[0] : 0;
};

class maxHeap {
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

        while (this.data[currentIdx] > this.data[this.getParentIndex(currentIdx)]) {
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
            let biggestChildIdx = this.getLeftChildIndex(currentIdx);

            if (this.data[this.getRightChildIndex(currentIdx)] != undefined && this.data[this.getRightChildIndex(currentIdx)] > this.data[this.getLeftChildIndex(currentIdx)])  {
                biggestChildIdx = this.getRightChildIndex(currentIdx);
            }

            if (this.data[currentIdx] < this.data[biggestChildIdx]) {
                this.swap(currentIdx, biggestChildIdx);
                currentIdx = biggestChildIdx;
            } else {
                return;
            }
        }
    }

}