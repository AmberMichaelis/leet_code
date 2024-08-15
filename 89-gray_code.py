from typing import List

class Solution:
    def grayCode(self, n: int) -> List[int]:
        result = []
        # Generate the gray code sequence by iterating through 2^n values
        for i in range(1 << n):  # 1 << n is the same as 2^n
            gray_code = i ^ (i >> 1)  # XOR i with i shifted right by 1 bit
            result.append(gray_code)
        return result
