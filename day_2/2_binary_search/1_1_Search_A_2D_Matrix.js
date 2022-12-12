// https://leetcode.com/problems/search-a-2d-matrix/description/

const searchMatrix = function(matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    let topPointer = 0;
    let bottomPointer = rows - 1;
    
    while (topPointer <= bottomPointer) {
        let row = Math.floor((topPointer + bottomPointer) / 2);
        if (target > matrix[row][cols-1]) {
            topPointer = row + 1
        } else if (target < matrix[row][0]) {
            bottomPointer = row - 1
        } else {
            break;
        }
    }
    
    if (!(topPointer <= bottomPointer)) return false;
    
    let row = Math.floor((topPointer + bottomPointer) / 2);
    let left = 0;
    let right = cols - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (target >= matrix[row][mid]) left = mid+1;
        if (target < matrix[row][mid]) right = mid - 1;
        if (target === matrix[row][mid]) return true;

        
    }
    return false;
};

// Time: O(log(m) + log(n)) where m and n are the row and col lengths
// Space: O(1)