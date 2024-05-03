class Solution:
    def twoSum(self, nums, target):
        numMap = {}
        for i, num in enumerate(nums):
            compliment = target - num
            if compliment in numMap:
                return [numMap[compliment], i]
            numMap[num] = i
        return []


solution = Solution()
print(solution.twoSum([2,7,11,15],9))
