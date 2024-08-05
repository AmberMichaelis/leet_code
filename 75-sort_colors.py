from typing import List

class Solution:
    def sortColors(self, nums: List[int]) -> None:
        low, current, high = 0, 0, len(nums) - 1
        
        while current <= high:
            if nums[current] == 0:
                nums[low], nums[current] = nums[current], nums[low]
                low += 1
                current += 1
            elif nums[current] == 1:
                current += 1
            else:  # nums[current] == 2
                nums[high], nums[current] = nums[current], nums[high]
                high -= 1
