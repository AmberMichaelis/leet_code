from typing import List

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        def backtrack(start=0):
            # If the start index reaches the length of nums, we've got a complete permutation
            if start == len(nums):
                result.append(nums[:])
                return
            for i in range(start, len(nums)):
                # Swap the current element with the start element
                nums[start], nums[i] = nums[i], nums[start]
                # Recurse with the next start index
                backtrack(start + 1)
                # Backtrack by swapping the elements back
                nums[start], nums[i] = nums[i], nums[start]

        result = []
        backtrack()
        return result

# Example usage:
solution = Solution()
print(solution.permute([1, 2, 3]))  # Output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
