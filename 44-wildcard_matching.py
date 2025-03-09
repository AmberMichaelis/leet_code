def isMatch(s: str, p: str) -> bool:
    m, n = len(s), len(p)
    
    # Create a DP table (m+1) x (n+1) initialized to False
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    
    # Empty pattern matches empty string
    dp[0][0] = True

    # '*' can match an empty string, so fill the first row
    for j in range(1, n + 1):
        if p[j - 1] == '*':
            dp[0][j] = dp[0][j - 1]

    # Fill the DP table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if p[j - 1] == s[i - 1] or p[j - 1] == '?':
                # Case 1: Characters match OR '?' matches any character
                dp[i][j] = dp[i - 1][j - 1]
            elif p[j - 1] == '*':
                # Case 2: '*' can match zero or more characters:
                # - Match empty sequence (dp[i][j-1])
                # - Match one/more characters (dp[i-1][j])
                dp[i][j] = dp[i][j - 1] or dp[i - 1][j]

    # Return final result
    return dp[m][n]

# Example test cases
print(isMatch("adceb", "*a*b"))  # Output: True
print(isMatch("acdcb", "a*c?b")) # Output: False
