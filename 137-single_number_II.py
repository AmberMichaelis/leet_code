from typing import List


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        # Initialize variables to store bits that have appeared once and twice
        once, twice = 0, 0
        
        for num in nums:
            # Update 'once' and 'twice' using bitwise operations
            once = (once ^ num) & ~twice
            twice = (twice ^ num) & ~once
        
        # 'once' now holds the single number
        return once
