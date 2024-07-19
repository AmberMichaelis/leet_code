class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n == 0:
            return 1
        if n < 0:
            x = 1 / x
            n = -n
        result = 1
        current_product = x
        while n > 0:
            if n % 2 == 1:
                result *= current_product
            current_product *= current_product
            n //= 2
        return result

# Example usage:
sol = Solution()
print(sol.myPow(2.0, 10))  # Output: 1024.0
print(sol.myPow(2.1, 3))   # Output: 9.261
print(sol.myPow(2.0, -2))  # Output: 0.25
