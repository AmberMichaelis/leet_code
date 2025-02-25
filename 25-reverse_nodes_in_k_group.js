// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head; // Base case: no need to reverse

    let dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev = dummy;
    let groupEnd = head;
    
    while (groupEnd) {
        // Find the end of the current group
        let i = 0;
        while (groupEnd && i < k - 1) {
            groupEnd = groupEnd.next;
            i++;
        }
        
        if (!groupEnd) break; // If the remaining nodes are fewer than k, break

        let groupStart = groupPrev.next;
        let nextGroupStart = groupEnd.next;
        groupEnd.next = null; // Temporarily break the link

        // Reverse the current k-group
        let prev = null;
        let curr = groupStart;
        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        
        // After reversal, reconnect the nodes
        groupPrev.next = prev;
        groupStart.next = nextGroupStart;
        
        // Move groupPrev and groupEnd to the next group
        groupPrev = groupStart;
        groupEnd = groupStart.next;
    }
    
    return dummy.next;
};
