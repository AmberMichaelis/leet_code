from typing import List


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        num_set = set(nums)
        longest_streak = 0
        
        for num in num_set:
            # Only start a sequence if it's the beginning of a possible sequence
            if num - 1 not in num_set:
                current_num = num
                current_streak = 1
                
                # Continue the sequence as long as the next consecutive number exists
                while current_num + 1 in num_set:
                    current_num += 1
                    current_streak += 1
                
                longest_streak = max(longest_streak, current_streak)
        
        return longest_streak
