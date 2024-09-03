# Definition for a binary tree node.
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        def dfs(node, current_path, current_sum):
            if not node:
                return
            
            # Include the current node in the path
            current_path.append(node.val)
            current_sum += node.val
            
            # Check if it's a leaf node and the current sum equals the target sum
            if not node.left and not node.right and current_sum == targetSum:
                # If so, add the current path to the result
                result.append(list(current_path))
            
            # Continue to search in the left and right children
            dfs(node.left, current_path, current_sum)
            dfs(node.right, current_path, current_sum)
            
            # Backtrack: remove the current node from the path
            current_path.pop()
        
        result = []
        dfs(root, [], 0)
        return result
