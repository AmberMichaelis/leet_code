class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        # Create a 2D list with dimensions m x n filled with 0
        dp = [[0] * n for _ in range(m)]
        
        # Initialize the first row and first column with 1s
        for i in range(m):
            dp[i][0] = 1
        for j in range(n):
            dp[0][j] = 1
        
        # Fill the dp table
        for i in range(1, m):
            for j in range(1, n):
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
        
        # The bottom-right cell contains the number of unique paths
        return dp[m-1][n-1]
