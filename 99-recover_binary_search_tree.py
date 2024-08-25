from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
class Solution:
    def recoverTree(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        # Initialize variables to track the nodes to swap
        first = second = prev = None
        
        # Helper function to perform in-order traversal
        def inorder(node):
            nonlocal first, second, prev
            if not node:
                return
            
            # Traverse the left subtree
            inorder(node.left)
            
            # Find the nodes that are out of order
            if prev and node.val < prev.val:
                if not first:
                    first = prev
                second = node
            
            # Update the previous node
            prev = node
            
            # Traverse the right subtree
            inorder(node.right)
        
        # Perform the in-order traversal to find the two nodes
        inorder(root)
        
        # Swap the values of the two nodes
        if first and second:
            first.val, second.val = second.val, first.val
