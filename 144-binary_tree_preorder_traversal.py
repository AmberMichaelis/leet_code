# Definition for a binary tree node.
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        def traverse(node):
            if node:
                result.append(node.val)
                traverse(node.left)
                traverse(node.right)
        
        result = []
        traverse(root)
        return result
