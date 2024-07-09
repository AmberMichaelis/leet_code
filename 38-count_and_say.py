class Solution:
    def countAndSay(self, n: int) -> str:
        if n == 1:
            return "1"
        
        # Start with the base sequence
        result = "1"
        
        for _ in range(1, n):
            result = self.nextSequence(result)
        
        return result
    
    def nextSequence(self, sequence: str) -> str:
        result = ""
        i = 0
        
        while i < len(sequence):
            count = 1
            while i + 1 < len(sequence) and sequence[i] == sequence[i + 1]:
                i += 1
                count += 1
            result += str(count) + sequence[i]
            i += 1
        
        return result
