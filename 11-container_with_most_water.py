from typing import List

class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        max_area = 0
        
        while left < right:
            # Calculate the width and the current area
            width = right - left
            current_area = min(height[left], height[right]) * width
            max_area = max(max_area, current_area)
            
            # Move the pointers
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
        
        return max_area
