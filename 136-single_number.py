from typing import List

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        # Initialize a variable to store the result of XOR operations
        result = 0
        
        # Iterate through each number in the list
        for num in nums:
            # Apply XOR between the result and the current number
            result ^= num
        
        # The result will be the single number that appears only once
        return result
