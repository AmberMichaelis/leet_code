class Solution:
    def numTrees(self, n: int) -> int:
        # Initialize an array G where G[i] stores the number of unique BSTs with i nodes
        G = [0] * (n + 1)
        # Base cases
        G[0] = 1  # An empty tree
        G[1] = 1  # A single node tree
        
        # Fill the array G for all numbers from 2 to n
        for i in range(2, n + 1):
            for j in range(1, i + 1):
                G[i] += G[j - 1] * G[i - j]
        
        # The answer is G[n], the number of unique BSTs with n nodes
        return G[n]
