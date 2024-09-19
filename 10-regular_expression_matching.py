class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        # Create a DP table with (len(s)+1) rows and (len(p)+1) columns
        dp = [[False] * (len(p) + 1) for _ in range(len(s) + 1)]
        
        # Empty string matches empty pattern
        dp[0][0] = True
        
        # Initialize for patterns that can match an empty string like a*, a*b*, etc.
        for j in range(1, len(p) + 1):
            if p[j - 1] == '*':
                dp[0][j] = dp[0][j - 2]  # '*' matches zero of the preceding element
        
        # Fill the DP table
        for i in range(1, len(s) + 1):
            for j in range(1, len(p) + 1):
                if p[j - 1] == '.' or p[j - 1] == s[i - 1]:
                    # Characters match directly or pattern has '.', which matches any single character
                    dp[i][j] = dp[i - 1][j - 1]
                elif p[j - 1] == '*':
                    # '*' can either match zero of the previous element or one or more times
                    dp[i][j] = dp[i][j - 2]  # '*' matches zero of the preceding element
                    if p[j - 2] == '.' or p[j - 2] == s[i - 1]:
                        dp[i][j] = dp[i][j] or dp[i - 1][j]  # '*' matches one or more of the preceding element

        # The final answer will be in the bottom-right corner of the DP table
        return dp[len(s)][len(p)]
