var maxAreaOfIsland = function(grid) {
    if (!grid || grid.length === 0) return 0;

    let rows = grid.length;
    let cols = grid[0].length;
    let maxArea = 0;

    const dfs = (r, c) => {
        if (
            r < 0 || c < 0 ||
            r >= rows || c >= cols ||
            grid[r][c] === 0
        ) return 0;

        // mark visited
        grid[r][c] = 0;

        let area = 1;

        area += dfs(r + 1, c);
        area += dfs(r - 1, c);
        area += dfs(r, c + 1);
        area += dfs(r, c - 1);

        return area;
    };

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                maxArea = Math.max(maxArea, dfs(r, c));
            }
        }
    }

    return maxArea;
};