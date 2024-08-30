# Definition for a binary tree node.
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
        if not inorder or not postorder:
            return None
        
        # The last element in postorder is the root
        root_val = postorder.pop()
        root = TreeNode(root_val)
        
        # Find the index of the root in inorder
        inorder_index = inorder.index(root_val)
        
        # Recursively build the right subtree first, since we pop from the end of postorder
        root.right = self.buildTree(inorder[inorder_index+1:], postorder)
        # Recursively build the left subtree
        root.left = self.buildTree(inorder[:inorder_index], postorder)
        
        return root
