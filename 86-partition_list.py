from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        before_head = ListNode(0)  # Placeholder for the beginning of 'before' list
        before = before_head       # Pointer to the current node in 'before' list
        after_head = ListNode(0)   # Placeholder for the beginning of 'after' list
        after = after_head         # Pointer to the current node in 'after' list
        
        # Iterate through the list and partition it into 'before' and 'after' lists
        while head:
            if head.val < x:
                before.next = head
                before = before.next
            else:
                after.next = head
                after = after.next
            head = head.next
        
        # Ensure the last node of the 'after' list points to None
        after.next = None
        
        # Connect the 'before' list with the 'after' list
        before.next = after_head.next
        
        return before_head.next
