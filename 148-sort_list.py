# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Base case: if the list is empty or has only one element, it's already sorted
        if not head or not head.next:
            return head
        
        # Step 1: Find the middle of the list
        mid = self.getMid(head)
        
        # Step 2: Split the list into two halves
        left = head
        right = mid.next
        mid.next = None  # Cut off the first half
        
        # Step 3: Sort each half
        left = self.sortList(left)
        right = self.sortList(right)
        
        # Step 4: Merge the sorted halves
        return self.mergeTwoLists(left, right)
    
    # Helper function to find the middle of the linked list
    def getMid(self, head: ListNode) -> ListNode:
        slow, fast = head, head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        return slow

    # Helper function to merge two sorted linked lists
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummy = ListNode()
        tail = dummy
        
        while l1 and l2:
            if l1.val < l2.val:
                tail.next = l1
                l1 = l1.next
            else:
                tail.next = l2
                l2 = l2.next
            tail = tail.next
        
        # If one of the lists is not fully merged, append the remaining nodes
        if l1:
            tail.next = l1
        elif l2:
            tail.next = l2
        
        return dummy.next
        