# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def findMiddle(self, head: ListNode) -> ListNode:
        # This helper function finds the middle of the linked list
        prev_ptr = None
        slow_ptr = head
        fast_ptr = head
        
        while fast_ptr and fast_ptr.next:
            prev_ptr = slow_ptr
            slow_ptr = slow_ptr.next
            fast_ptr = fast_ptr.next.next
        
        # Disconnect the left half from the mid node
        if prev_ptr:
            prev_ptr.next = None
        
        return slow_ptr

    def sortedListToBST(self, head: ListNode) -> Optional[TreeNode]:
        # Base case
        if not head:
            return None
        
        # Find the middle element of the linked list
        mid = self.findMiddle(head)
        
        # The mid becomes the root of the BST
        root = TreeNode(mid.val)
        
        # If there is only one element, return it as a tree node
        if head == mid:
            return root
        
        # Recursively construct the left subtree and right subtree
        root.left = self.sortedListToBST(head)
        root.right = self.sortedListToBST(mid.next)
        
        return root
