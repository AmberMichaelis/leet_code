from typing import List


class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        def backtrack(start, path):
            # Add the current subset (path) to the result
            result.append(list(path))
            for i in range(start, len(nums)):
                # If the current element is the same as the previous one and it's not at the start position, skip it
                if i > start and nums[i] == nums[i - 1]:
                    continue
                # Include nums[i] in the subset
                path.append(nums[i])
                # Move on to the next element
                backtrack(i + 1, path)
                # Backtrack by removing the last element
                path.pop()

        nums.sort()  # Sort the numbers to handle duplicates easily
        result = []
        backtrack(0, [])
        return result
