from typing import List

class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        # Initialize an n x n matrix filled with zeros
        matrix = [[0] * n for _ in range(n)]
        
        # Define the boundaries of the spiral
        left, right = 0, n - 1
        top, bottom = 0, n - 1
        
        # Start filling the matrix with numbers from 1 to n^2
        num = 1
        while left <= right and top <= bottom:
            # Fill the top row from left to right
            for j in range(left, right + 1):
                matrix[top][j] = num
                num += 1
            top += 1
            
            # Fill the right column from top to bottom
            for i in range(top, bottom + 1):
                matrix[i][right] = num
                num += 1
            right -= 1
            
            # Fill the bottom row from right to left
            for j in range(right, left - 1, -1):
                matrix[bottom][j] = num
                num += 1
            bottom -= 1
            
            # Fill the left column from bottom to top
            for i in range(bottom, top - 1, -1):
                matrix[i][left] = num
                num += 1
            left += 1
        
        return matrix
