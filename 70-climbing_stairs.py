class Solution(object):
    def climbStairs(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n == 1:
            return 1
        elif n == 2:
            return 2

        # Initialize the base cases
        first, second = 1, 2
        
        # Use dynamic programming to calculate the result
        for i in range(3, n + 1):
            third = first + second
            first = second
            second = third
        
        return second

# Example usage:
sol = Solution()
print(sol.climbStairs(2))  # Output: 2
print(sol.climbStairs(3))  # Output: 3
print(sol.climbStairs(4))  # Output: 5
