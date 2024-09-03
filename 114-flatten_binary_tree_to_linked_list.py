# Definition for a binary tree node.
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        if not root:
            return
        
        # Start with the root
        current = root
        
        while current:
            if current.left:
                # Find the rightmost node in the left subtree
                rightmost = current.left
                while rightmost.right:
                    rightmost = rightmost.right
                
                # Rewire the connections
                rightmost.right = current.right
                current.right = current.left
                current.left = None
            
            # Move to the next node
            current = current.right
