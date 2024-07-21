from typing import List

class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if not matrix or not matrix[0]:
            return []
        
        result = []
        top, bottom, left, right = 0, len(matrix) - 1, 0, len(matrix[0]) - 1
        
        while top <= bottom and left <= right:
            # Traverse from left to right across the top row
            for i in range(left, right + 1):
                result.append(matrix[top][i])
            top += 1
            
            # Traverse from top to bottom down the right column
            for i in range(top, bottom + 1):
                result.append(matrix[i][right])
            right -= 1
            
            if top <= bottom:
                # Traverse from right to left across the bottom row
                for i in range(right, left - 1, -1):
                    result.append(matrix[bottom][i])
                bottom -= 1
            
            if left <= right:
                # Traverse from bottom to top up the left column
                for i in range(bottom, top - 1, -1):
                    result.append(matrix[i][left])
                left += 1
        
        return result

# Example usage:
sol = Solution()
print(sol.spiralOrder([[1,2,3],[4,5,6],[7,8,9]])) 
