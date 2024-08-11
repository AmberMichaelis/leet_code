from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) <= 2:
            return len(nums)
        
        i = 2  # Start from the third element
        for j in range(2, len(nums)):
            if nums[j] != nums[i - 2]:  # Compare with the element that is two places before
                nums[i] = nums[j]
                i += 1
        
        return i
