class Solution:
    def numDecodings(self, s: str) -> int:
        if not s or s[0] == '0':
            return 0

        # dp[i] will hold the number of ways to decode the string up to and including s[i-1]
        dp = [0] * (len(s) + 1)
        
        # Base cases
        dp[0] = 1  # There's one way to decode an empty string
        dp[1] = 1  # There's one way to decode if the first character isn't '0'

        for i in range(2, len(s) + 1):
            # Check the last one digit
            if s[i-1] != '0':
                dp[i] += dp[i-1]
            
            # Check the last two digits
            two_digit = int(s[i-2:i])
            if 10 <= two_digit <= 26:
                dp[i] += dp[i-2]

        return dp[-1]
