// https://leetcode.com/problems/valid-sudoku/

var isValidSudoku = function(board) {
    
    let row = {};
    let col = {};
    let box = {};
    
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            let currentVal = board[r][c];
            if (currentVal === '.') continue;
            
            const boxCoord = `${Math.floor(r/3)},${Math.floor(c/3)}`;

            if (!row[r]) row[r] = new Set();
            if (!col[c]) col[c] = new Set();
            if (!box[boxCoord]) box[boxCoord]= new Set();

            if (row[r].has(currentVal) || col[c].has(currentVal) || box[boxCoord].has(currentVal)) return false;

            row[r].add(currentVal);
            col[c].add(currentVal);
            box[boxCoord].add(currentVal);            
            
            }
        }
    return true
};

// Time: O(1)
// Space: O(1)