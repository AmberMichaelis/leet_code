import heapq
from typing import List, Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        # Min-heap to store the nodes
        heap = []
        
        # Insert the first node of each list into the heap
        for i, node in enumerate(lists):
            if node:
                heapq.heappush(heap, (node.val, i, node))
        
        # Create a dummy node to start the merged list
        dummy = ListNode(0)
        current = dummy
        
        # Process the heap
        while heap:
            # Pop the smallest element from the heap
            val, i, node = heapq.heappop(heap)
            
            # Add the smallest node to the merged list
            current.next = node
            current = current.next
            
            # If there is a next node in the list, push it to the heap
            if node.next:
                heapq.heappush(heap, (node.next.val, i, node.next))
        
        # Return the next node of the dummy node, which is the start of the merged list
        return dummy.next
