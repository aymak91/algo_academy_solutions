// https://leetcode.com/problems/guess-number-higher-or-lower/description/

var guessNumber = function(n) {
    let left = 0;
    let right = n;

    while (left <= right) {
        const mid = Math.floor(left + (right-left)/2);

        switch (guess(mid)) {
            case -1:
                right = mid-1;
                break;
            case 1:
                left = mid+1;
                break;
            default:
                return mid;
        }

    }
};

// Time: O(logn) where n is the size of n
// Space: O(1)