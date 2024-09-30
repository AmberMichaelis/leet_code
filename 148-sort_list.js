// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    // Base case: if head is null or there is only one node
    if (!head || !head.next) {
        return head;
    }

    // Step 1: Split the list into two halves using slow and fast pointers
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // Disconnect the first half from the second
    prev.next = null;

    // Step 2: Recursively sort each half
    let left = sortList(head);
    let right = sortList(slow);

    // Step 3: Merge the two sorted halves
    return merge(left, right);
};

// Helper function to merge two sorted lists
function merge(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // If one list is longer, append the rest of it
    current.next = l1 ? l1 : l2;

    return dummy.next;
}
