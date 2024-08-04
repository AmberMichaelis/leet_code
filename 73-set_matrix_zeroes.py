from typing import List

class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        if not matrix:
            return
        
        rows, cols = len(matrix), len(matrix[0])
        first_row_zero = False
        first_col_zero = False
        
        # Determine if the first row or first column should be zero
        for i in range(rows):
            if matrix[i][0] == 0:
                first_col_zero = True
                break
        
        for j in range(cols):
            if matrix[0][j] == 0:
                first_row_zero = True
                break
        
        # Use the first row and first column to mark zeros
        for i in range(1, rows):
            for j in range(1, cols):
                if matrix[i][j] == 0:
                    matrix[i][0] = 0
                    matrix[0][j] = 0
        
        # Set rows and columns to zero based on the marks
        for i in range(1, rows):
            if matrix[i][0] == 0:
                for j in range(1, cols):
                    matrix[i][j] = 0
        
        for j in range(1, cols):
            if matrix[0][j] == 0:
                for i in range(1, rows):
                    matrix[i][j] = 0
        
        # Set the first row and first column to zero if needed
        if first_row_zero:
            for j in range(cols):
                matrix[0][j] = 0
        
        if first_col_zero:
            for i in range(rows):
                matrix[i][0] = 0
