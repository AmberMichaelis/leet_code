from typing import List

class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        def backtrack(start: int, comb: List[int]):
            if len(comb) == k:
                result.append(list(comb))
                return
            for i in range(start, n + 1):
                comb.append(i)
                backtrack(i + 1, comb)
                comb.pop()
        
        result = []
        backtrack(1, [])
        return result
