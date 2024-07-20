from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        # Initialize current_sum and max_sum with the first element of the array
        current_sum = max_sum = nums[0]
        
        # Iterate through the array starting from the second element
        for num in nums[1:]:
            # Update current_sum to the maximum of num or current_sum + num
            current_sum = max(num, current_sum + num)
            # Update max_sum to the maximum of max_sum or current_sum
            max_sum = max(max_sum, current_sum)
        
        return max_sum

# Example usage:
sol = Solution()
print(sol.maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Output: 6
print(sol.maxSubArray([1]))  # Output: 1
print(sol.maxSubArray([5,4,-1,7,8]))  # Output: 23
