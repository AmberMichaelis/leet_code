# Definition for a Node.
from typing import Optional


class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next

class Solution:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        if not root:
            return None
        
        # Start with the root node
        leftmost = root
        
        while leftmost.left:
            # Traverse the current level and set the next pointers for the next level
            head = leftmost
            while head:
                # Connect the left and right children of the current node
                head.left.next = head.right
                
                # Connect the right child to the next left child if the next node exists
                if head.next:
                    head.right.next = head.next.left
                
                # Move to the next node in the current level
                head = head.next
            
            # Move to the next level (leftmost node of the next level)
            leftmost = leftmost.left
        
        return root
