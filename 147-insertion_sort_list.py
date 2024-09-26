# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head  # If the list is empty or has one element, it's already sorted

        # Initialize a dummy node to help with insertion
        sorted_list = ListNode(0)
        current = head

        # Traverse the original list
        while current:
            # At each iteration, current is the node to be inserted into the sorted part
            prev = sorted_list  # Start from the dummy node
            next_node = current.next  # Save the next node to process later
            
            # Find the right position to insert the current node
            while prev.next and prev.next.val < current.val:
                prev = prev.next  # Move the pointer forward in the sorted part
            
            # Insert current node into the sorted part
            current.next = prev.next
            prev.next = current

            # Move to the next node in the original list
            current = next_node

        # Return the sorted list, skipping the dummy node
        return sorted_list.next
