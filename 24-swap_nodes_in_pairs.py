from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Dummy node initialization to simplify edge cases
        dummy = ListNode(0)
        dummy.next = head
        current = dummy
        
        # Iterate through the list while there are pairs to swap
        while current.next and current.next.next:
            first = current.next
            second = current.next.next
            
            # Swapping nodes
            first.next = second.next
            second.next = first
            current.next = second
            
            # Move to the next pair
            current = first
        
        return dummy.next
