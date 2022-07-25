/* Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as
 * well.
 *
 * Example 1:
 * Input: head = [1,1,2]
 * Output: [1,2]
 * 
 * Example 2:
 * Input: head = [1,1,2,3,3]
 * Output: [1,2,3]
 * 
 * // Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val === undefined ? 0 : val)
 *   this.next = (next === undefined ? null : next)
 * }
 * 
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;
    let current = head;
    let fast;
    while(current) {
        fast = current;
        while(fast && current.val == fast.val) {
            fast = fast.next;
        }
        current.next = fast;
        current = fast;
    }
    
};

let list = new ListNode(1,1)
console.log(list)
