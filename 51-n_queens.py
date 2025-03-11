from typing import List

def solveNQueens(n: int) -> List[List[str]]:
    """
    Solves the N-Queens problem and returns all possible board configurations.
    
    Args:
        n (int): The size of the chessboard (n x n).

    Returns:
        List[List[str]]: A list of all valid board configurations, where each configuration
                         is represented as a list of strings.
    """
    result = []  # Stores all valid board configurations
    board = [["."] * n for _ in range(n)]  # Initialize empty n x n board

    def is_safe(row: int, col: int) -> bool:
        """
        Checks if it's safe to place a queen at board[row][col].

        Args:
            row (int): The row index.
            col (int): The column index.

        Returns:
            bool: True if the placement is safe, False otherwise.
        """
        # Check the column (no queen should be placed above in the same column)
        for i in range(row):
            if board[i][col] == "Q":
                return False

        # Check the upper-left diagonal
        i, j = row, col
        while i >= 0 and j >= 0:
            if board[i][j] == "Q":
                return False
            i -= 1
            j -= 1

        # Check the upper-right diagonal
        i, j = row, col
        while i >= 0 and j < n:
            if board[i][j] == "Q":
                return False
            i -= 1
            j += 1

        return True  # Placement is safe

    def backtrack(row: int):
        """
        Attempts to place queens on the board using backtracking.

        Args:
            row (int): The current row being considered for queen placement.
        """
        # Base case: If all queens are placed, store the solution
        if row == n:
            result.append(["".join(row) for row in board])  # Convert board to a list of strings
            return

        # Try placing a queen in each column of the current row
        for col in range(n):
            if is_safe(row, col):  # Check if placing a queen is safe
                board[row][col] = "Q"  # Place the queen
                backtrack(row + 1)  # Move to the next row
                board[row][col] = "."  # Remove the queen (backtrack)

    backtrack(0)  # Start solving from the first row
    return result

# Example usage:
n = 4
solutions = solveNQueens(n)
for solution in solutions:
    for row in solution:
        print(row)
    print()  # Print a blank line between solutions
