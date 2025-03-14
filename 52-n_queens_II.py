class Solution:
    def totalNQueens(self, n: int) -> int:
        # This function will use backtracking to count the number of valid solutions.
        def backtrack(row: int):
            if row == n:
                # If we have placed queens in all rows, we found a valid solution
                nonlocal count
                count += 1
                return
            
            for col in range(n):
                # Check if the current position is under attack
                if col in cols or (row - col) in diagonals or (row + col) in anti_diagonals:
                    continue  # Skip this position if it's under attack
                
                # Place the queen
                cols.add(col)
                diagonals.add(row - col)
                anti_diagonals.add(row + col)
                
                # Move to the next row
                backtrack(row + 1)
                
                # Backtrack: remove the queen and try next column
                cols.remove(col)
                diagonals.remove(row - col)
                anti_diagonals.remove(row + col)
        
        count = 0  # To store the total number of valid solutions
        cols = set()  # Columns where queens are placed
        diagonals = set()  # Difference of row and column (\ diagonal)
        anti_diagonals = set()  # Sum of row and column (/ diagonal)
        
        backtrack(0)  # Start from the first row
        return count
