/* Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
 * Return the linked list sorted as well.
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

// const SinglyLinkedList = require('./singly_linked_list');
// also uncomment line 8 in singly_linked_list.js ... module.exports =

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let current = head
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }

    }
    return head
};

/* Explanation:
 *
 * In this explantion I use "second node" to refer to the next node,
 * and "third node" to refer to the next next node.
 * 
 * Create a node called current that points to the head of the linked list.
 * 
 * While current node and second node are not null,
 * 
 * If the second node is equal to the third node,
 * set the current node to point to the third node,
 * thus skipping and removing the duplicate second node.
 * If the second node is not equal to the third node,
 * set the current node to the second node.
 * Repeat the while loop.
 * 
 * If current or the next node are null,
 * return the first node in the linked list.
 *
 */
