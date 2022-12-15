// https://leetcode.com/problems/max-area-of-island/submissions/860321290/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let largestIsland = 0;
    let visited = new Set();

    for (let row=0; row<grid.length; row++) {
        for (let col=0; col<grid[0].length; col++) {
            if (grid[row][col] === 1) {
                largestIsland = Math.max(largestIsland, searchIsland(grid, row, col, visited));
            }
        }
    }
    return largestIsland;
};

const searchIsland = (grid, row, col, visited) => {
    if (!inbounds(grid, row, col) || grid[row][col] !== 1) return 0;
    let pos = row+','+col;
    let size = 1;
    if (visited.has(pos)) return 0;
    
    visited.add(pos)
    const directions = [[1,0], [0,1], [-1,0], [0,-1]];

    for (let dir of directions) {
        const newRow = row+dir[0];
        const newCol = col+dir[1];

        size += searchIsland(grid, newRow, newCol, visited);
    }
    return size;
}

const inbounds = function(grid, row, col) {
    const rowInbounds = row >= 0 && row < grid.length;
    const colInbounds = col >= 0 && col < grid[0].length;
    return rowInbounds && colInbounds;
}