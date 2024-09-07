# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        # Initialize a dummy node to build the result list
        dummy = ListNode()
        current = dummy
        carry = 0
        
        # Iterate through both lists until both are exhausted
        while l1 or l2 or carry:
            # Get the current values (0 if the list is exhausted)
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0
            
            # Calculate the sum and the carry
            total = val1 + val2 + carry
            carry = total // 10
            total = total % 10
            
            # Create a new node with the sum and move the pointer
            current.next = ListNode(total)
            current = current.next
            
            # Move to the next nodes in the lists
            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next
        
        # The dummy node's next points to the head of the result list
        return dummy.next
