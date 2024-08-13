from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        prev = dummy
        
        while head:
            # If it's the start of duplicates sequence
            if head.next and head.val == head.next.val:
                # Skip all nodes with the same value
                while head.next and head.val == head.next.val:
                    head = head.next
                # Connect prev with the node after duplicates
                prev.next = head.next
            else:
                # No duplicates, move prev to the current node
                prev = prev.next
            
            # Move head to the next node
            head = head.next
        
        return dummy.next
