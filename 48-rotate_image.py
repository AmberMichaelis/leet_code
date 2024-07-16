from typing import List

class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        n = len(matrix)
        
        # Transpose the matrix
        for i in range(n):
            for j in range(i, n):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        
        # Reverse each row
        for i in range(n):
            matrix[i].reverse()

# Example usage:
sol = Solution()
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
sol.rotate(matrix)
print(matrix)  # Output should be [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
