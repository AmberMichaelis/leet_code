# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next

class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if not root:
            return None
        
        # Start with the root node
        current = root
        next_level_head = None  # Head of the next level
        prev = None  # The previous node to connect in the next level
        
        while current:
            # Traverse the current level
            while current:
                # Process the left child
                if current.left:
                    if prev:
                        prev.next = current.left
                    else:
                        next_level_head = current.left
                    prev = current.left
                
                # Process the right child
                if current.right:
                    if prev:
                        prev.next = current.right
                    else:
                        next_level_head = current.right
                    prev = current.right
                
                # Move to the next node in the current level
                current = current.next
            
            # Move to the next level
            current = next_level_head
            next_level_head = None
            prev = None
        
        return root
