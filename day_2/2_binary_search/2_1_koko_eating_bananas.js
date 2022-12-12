// https://leetcode.com/problems/koko-eating-bananas/

const minEatingSpeed = (piles, h) => {

    let left = 1;
    let right = Math.max(...piles);
    let result = right;
    
    while (left <= right) {
        let k = Math.floor((left + right)/2)
        let hours = 0;
        
        for (let p of piles) {
            hours += Math.ceil(p/k);
        }
        
        if (hours <= h) {
            result = Math.min(result, k);
            right = k-1;
        } else {
            left = k+1;
        }
        
    }
    
    return result;
}

// Time: O(max(n)*log(n)) where n is the length of piles
// Space: O(1)