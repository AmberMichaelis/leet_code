class Solution(object):
    def isPalindrome(self, x):
        return False if x < 0 else str(x)[::-1] == str(x)
  
solution = Solution()
print(solution.isPalindrome(121))
print(solution.isPalindrome(-121))
print(solution.isPalindrome(10))

