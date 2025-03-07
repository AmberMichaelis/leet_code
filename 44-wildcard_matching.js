var isMatch = function (s, p) {
    let m = s.length, n = p.length;

    // Create a DP table with dimensions (m+1) x (n+1)
    let dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));

    // Empty string matches empty pattern
    dp[0][0] = true;

    // '*' can match an empty string, so fill the first row
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
                // Case 1: Characters match OR '?' matches any character
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                // Case 2: '*' can match zero or more characters:
                // - Match empty sequence (dp[i][j-1])
                // - Match one/more characters (dp[i-1][j])
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            }
        }
    }

    // Return final result
    return dp[m][n];
};

// Example test cases
console.log(isMatch("adceb", "*a*b"));  // true
console.log(isMatch("acdcb", "a*c?b")); // false
