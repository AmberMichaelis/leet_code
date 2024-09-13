from typing import List


class Solution:
    def partition(self, s: str) -> List[List[str]]:
        # Helper function to check if a string is a palindrome
        def is_palindrome(subs: str) -> bool:
            return subs == subs[::-1]
        
        # Backtracking function to find all partitions
        def backtrack(start: int, path: List[str]):
            # If we've reached the end of the string, append the current partition
            if start == len(s):
                result.append(path[:])  # Append a copy of the current path
                return
            
            # Try partitioning at every possible point
            for end in range(start + 1, len(s) + 1):
                substring = s[start:end]
                if is_palindrome(substring):  # Check if the current substring is a palindrome
                    path.append(substring)  # Choose the current substring
                    backtrack(end, path)  # Recur for the rest of the string
                    path.pop()  # Backtrack and remove the current substring
        
        result = []
        backtrack(0, [])
        return result
