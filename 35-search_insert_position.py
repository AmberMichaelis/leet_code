class Solution(object):
    def searchInsert(self, nums, target):
        if target in nums:
            return nums.index(target)
        else:
            for i in range(len(nums)):
                if nums[i] > target:
                    return i

            return len(nums)

solution = Solution()
print(solution.searchInsert([1,3,5,6], 5))
print(solution.searchInsert([1,3,5,6], 2))
print(solution.searchInsert([1,3,5,6], 7))
