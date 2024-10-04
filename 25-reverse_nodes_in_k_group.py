# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        # Helper function to reverse 'k' nodes in the linked list
        def reverseLinkedList(head, k):
            prev, curr = None, head
            while k > 0:
                next_node = curr.next
                curr.next = prev
                prev = curr
                curr = next_node
                k -= 1
            return prev

        # Check if there are at least 'k' nodes left to reverse
        def hasKNodes(node, k):
            count = 0
            while node and count < k:
                node = node.next
                count += 1
            return count == k

        # Dummy node to simplify handling of the head node
        dummy = ListNode(0)
        dummy.next = head
        prev_group = dummy

        while hasKNodes(head, k):
            # Reverse the next k nodes
            tail = head
            next_group = tail.next
            
            # Reverse k nodes starting from 'head'
            new_head = reverseLinkedList(head, k)
            
            # Connect the previous group to the new head
            prev_group.next = new_head
            tail.next = next_group

            # Move to the next group
            prev_group = tail
            head = next_group

        return dummy.next
