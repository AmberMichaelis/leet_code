from typing import List


class Solution:
    def restoreIpAddresses(self, s: str) -> List[str]:
        def backtrack(start, path):
            # If we have 4 segments and we are at the end of the string, it's a valid IP address
            if len(path) == 4:
                if start == len(s):
                    result.append(".".join(path))
                return
            
            # Explore segments of length 1 to 3
            for length in range(1, 4):
                if start + length > len(s):
                    break
                segment = s[start:start + length]
                # Check if the segment is valid
                if (segment[0] == '0' and len(segment) > 1) or int(segment) > 255:
                    continue
                backtrack(start + length, path + [segment])
        
        result = []
        backtrack(0, [])
        return result
