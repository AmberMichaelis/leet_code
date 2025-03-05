from typing import List

class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Solves the Sudoku puzzle in-place using backtracking.
        
        :param board: A 9x9 Sudoku board where '.' represents an empty cell.
        :return: None (the board is modified in-place).
        
        Approach:
        1. Use backtracking to fill empty cells with digits 1-9.
        2. At each empty cell, try each digit that does not violate Sudoku rules:
           - The digit is not in the current row.
           - The digit is not in the current column.
           - The digit is not in the current 3x3 sub-box.
        3. If a digit is valid, place it and recursively attempt to solve the rest
           of the board. If at any point no digit can be placed, backtrack.
        4. Continue until all cells are filled with valid digits.
        """
        
        self.solve(board)

    def solve(self, board: List[List[str]]) -> bool:
        """
        Recursively attempts to fill each empty cell with a valid digit.
        
        :param board: The current state of the Sudoku board.
        :return: True if the board is solved, False if we need to backtrack.
        """
        # Search for the next empty cell (denoted by '.')
        for row in range(9):
            for col in range(9):
                if board[row][col] == '.':
                    # Try digits 1 through 9
                    for digit in '123456789':
                        if self.isValid(board, row, col, digit):
                            # Place the digit
                            board[row][col] = digit
                            
                            # Recursively solve the rest of the board
                            if self.solve(board):
                                return True
                            
                            # If we reach a dead end, reset the cell and backtrack
                            board[row][col] = '.'
                    
                    # If no valid digit is found, we must backtrack
                    return False
        
        # If no empty cells remain, the board is solved
        return True

    def isValid(self, board: List[List[str]], row: int, col: int, digit: str) -> bool:
        """
        Checks if placing 'digit' at board[row][col] violates Sudoku rules.
        
        :param board: The current state of the Sudoku board.
        :param row: Row index where we want to place the digit.
        :param col: Column index where we want to place the digit.
        :param digit: The candidate digit to place.
        :return: True if valid, False otherwise.
        """
        # Check the row
        for c in range(9):
            if board[row][c] == digit:
                return False
        
        # Check the column
        for r in range(9):
            if board[r][col] == digit:
                return False
        
        # Check the 3x3 sub-box
        sub_row_start = (row // 3) * 3
        sub_col_start = (col // 3) * 3
        for r in range(sub_row_start, sub_row_start + 3):
            for c in range(sub_col_start, sub_col_start + 3):
                if board[r][c] == digit:
                    return False
        
        return True
