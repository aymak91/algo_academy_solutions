// https://leetcode.com/problems/pacific-atlantic-water-flow/description/

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const pacific = new Set();
    const atlantic = new Set();
    const [ROWS, COLS] = [heights.length, heights[0].length]; 

    const dfs = (row, col, visited, prevHeight) => {
        const pos = row+","+col;
        if (visited.has(pos) || !inBounds(heights, row, col) || heights[row][col] < prevHeight) {
            return
        }

        visited.add(pos);
        const directions = [[1,0], [0,1], [-1,0], [0,-1]];
        for (let dir of directions) {
            const newRow = row+dir[0];
            const newCol = col+dir[1];
            dfs(newRow, newCol, visited, heights[row][col]);
        }
    }

    for (let col=0; col<COLS; col++) {
        dfs(0, col, pacific, heights[0][col]);
        dfs(ROWS-1, col, atlantic, heights[ROWS-1][col]);
    }

    for (let row=0; row<ROWS; row++) {
        dfs(row, 0, pacific, heights[row][0]);
        dfs(row, COLS-1, atlantic, heights[row][COLS-1]);
    }
    
    let res = [];

    for (let pacificCoord of pacific) {
        if (atlantic.has(pacificCoord)) {
            const coord = pacificCoord.split(',');
            res.push(coord);
        }
        
    }

    return res;
};

const inBounds = (grid, row, col) => {
	const rowInbounds = 0 <= row && row < grid.length;
	const colInbounds = 0 <= col && col < grid[0].length;
	return rowInbounds && colInbounds;
}