from typing import List
from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = defaultdict(list)
        
        for s in strs:
            # Sort the string and use it as the key
            sorted_str = ''.join(sorted(s))
            # Append the original string to the list corresponding to the sorted key
            anagrams[sorted_str].append(s)
        
        # Return the values of the dictionary as a list of lists
        return list(anagrams.values())

# Example usage:
sol = Solution()
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
print(sol.groupAnagrams(strs))
