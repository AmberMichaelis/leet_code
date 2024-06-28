from typing import List

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits:
            return []
        
        # Mapping of digits to corresponding letters
        digit_to_char = {
            '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
            '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
        }
        
        # Function to backtrack and generate combinations
        def backtrack(index: int, path: str):
            if index == len(digits):
                combinations.append(path)
                return
            possible_letters = digit_to_char[digits[index]]
            for letter in possible_letters:
                backtrack(index + 1, path + letter)
        
        combinations = []
        backtrack(0, "")
        return combinations
