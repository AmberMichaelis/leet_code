from typing import List

class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # Step 1: Find the first decreasing element from the end
        i = len(nums) - 2
        while i >= 0 and nums[i] >= nums[i + 1]:
            i -= 1

        # Step 2: If the entire array is non-increasing, reverse it
        if i >= 0:
            # Step 3: Find the element just larger than nums[i]
            j = len(nums) - 1
            while nums[j] <= nums[i]:
                j -= 1
            # Step 4: Swap elements at i and j
            nums[i], nums[j] = nums[j], nums[i]

        # Step 5: Reverse the elements from i+1 to end of the list
        nums[i + 1:] = reversed(nums[i + 1:])
