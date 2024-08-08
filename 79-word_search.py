from typing import List

class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        if not board or not board[0]:
            return False
        
        rows, cols = len(board), len(board[0])
        
        def backtrack(r, c, idx):
            if idx == len(word):
                return True
            if r < 0 or c < 0 or r >= rows or c >= cols or board[r][c] != word[idx]:
                return False
            
            # Mark the cell as visited by using a temporary value
            temp, board[r][c] = board[r][c], '#'
            found = (
                backtrack(r + 1, c, idx + 1) or
                backtrack(r - 1, c, idx + 1) or
                backtrack(r, c + 1, idx + 1) or
                backtrack(r, c - 1, idx + 1)
            )
            # Unmark the cell
            board[r][c] = temp
            return found
        
        for i in range(rows):
            for j in range(cols):
                if board[i][j] == word[0] and backtrack(i, j, 0):
                    return True
        
        return False
