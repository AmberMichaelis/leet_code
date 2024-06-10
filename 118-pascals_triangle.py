from typing import List

class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        if numRows == 0:
            return []
        
        # Initialize Pascal's Triangle with the first row
        triangle = [[1]]
        
        for i in range(1, numRows):
            # Initialize the current row with 1
            row = [1]
            # Get the previous row
            prev_row = triangle[i - 1]
            # Fill in the current row
            for j in range(1, i):
                row.append(prev_row[j - 1] + prev_row[j])
            # End the current row with 1
            row.append(1)
            # Add the current row to the triangle
            triangle.append(row)
        
        return triangle

# Example usage:
sol = Solution()
numRows = 5
print(sol.generate(numRows))
