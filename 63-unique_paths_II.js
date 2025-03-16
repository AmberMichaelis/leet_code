/**
 * LeetCode #63: Unique Paths II
 * 
 * A robot is located at the top-left corner of a grid (m x n).
 * - Some cells in the grid contain obstacles (1).
 * - The robot can only move down or right at any point in time.
 * - We want to find how many unique paths exist from top-left to bottom-right.
 * 
 * @param {number[][]} obstacleGrid - 2D array where 1 indicates an obstacle, 0 indicates a free cell.
 * @return {number} - The number of unique paths to reach the bottom-right cell.
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // Number of rows (m) and columns (n)
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;

    // If the starting cell has an obstacle, there are no paths.
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }

    // Create a 2D dp array of the same size as obstacleGrid
    // dp[i][j] will represent the number of ways to reach cell (i, j).
    const dp = Array.from({ length: m }, () => Array(n).fill(0));

    // The number of ways to reach the starting cell is 1 (only one way to stand still).
    dp[0][0] = 1;

    // Fill the first column (i from 1 to m-1)
    // If we hit an obstacle in the first column, no cells below it can be reached in that column.
    for (let i = 1; i < m; i++) {
        if (obstacleGrid[i][0] === 0 && dp[i - 1][0] === 1) {
            dp[i][0] = 1;
        } else {
            dp[i][0] = 0;
        }
    }

    // Fill the first row (j from 1 to n-1)
    // If we hit an obstacle in the first row, no cells to the right of it can be reached in that row.
    for (let j = 1; j < n; j++) {
        if (obstacleGrid[0][j] === 0 && dp[0][j - 1] === 1) {
            dp[0][j] = 1;
        } else {
            dp[0][j] = 0;
        }
    }

    // Fill the rest of the dp table
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // If there is an obstacle at (i, j), dp[i][j] remains 0.
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                // Otherwise, the number of ways to get to (i, j) is the sum of:
                // - ways to get from above (i-1, j)
                // - ways to get from left  (i, j-1)
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }

    // The bottom-right cell contains the total number of unique paths.
    return dp[m - 1][n - 1];
};
