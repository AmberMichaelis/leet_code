class Solution:
    def plusOne(self, digits):
        for i in reversed(range(len(digits))):
            if digits[i] < 9:
                digits[i] += 1
                return digits
            else:
                digits[i] = 0
        return [1] + digits

solution = Solution()

print(solution.plusOne([1,2,3]))
print(solution.plusOne([4,3,2,1]))
print(solution.plusOne([9]))
