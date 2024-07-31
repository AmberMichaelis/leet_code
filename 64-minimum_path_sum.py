from typing import List

class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        if not grid or not grid[0]:
            return 0
        
        m, n = len(grid), len(grid[0])
        
        # Initialize the dp array with the same dimensions as grid
        dp = [[0] * n for _ in range(m)]
        
        # Initialize the start point
        dp[0][0] = grid[0][0]
        
        # Fill the first row
        for j in range(1, n):
            dp[0][j] = dp[0][j-1] + grid[0][j]
        
        # Fill the first column
        for i in range(1, m):
            dp[i][0] = dp[i-1][0] + grid[i][0]
        
        # Fill the rest of the dp table
        for i in range(1, m):
            for j in range(1, n):
                dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
        
        # The bottom-right cell contains the minimum path sum
        return dp[m-1][n-1]
