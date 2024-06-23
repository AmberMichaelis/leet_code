class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1 or numRows >= len(s):
            return s
        
        # Create a list for each row
        rows = [''] * numRows
        current_row = 0
        direction = -1
        
        for char in s:
            # Add the character to the current row
            rows[current_row] += char
            # If we are at the top or bottom row, we need to change direction
            if current_row == 0 or current_row == numRows - 1:
                direction *= -1
            # Move to the next row
            current_row += direction
        
        # Join all the rows to form the final string
        return ''.join(rows)
