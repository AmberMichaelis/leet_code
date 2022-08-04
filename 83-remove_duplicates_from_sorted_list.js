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

const SinglyLinkedList = require('./singly_linked_list');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head || !head.next) return head;
    let current = head;
    let fast;
    while (current) {
        fast = current;
        while (fast && current.val == fast.val) {
            fast = fast.next;
        }
        current.next = fast;
        current = fast;
    }

};

// Example 1
let list1 = new SinglyLinkedList([1, 1, 2]);
list1.deleteDuplicates();
console.log(list1.print());

// Example 2
let list2 = new SinglyLinkedList([1, 1, 2, 3, 3]);
list2.deleteDuplicates();
console.log(list2.print());


// list.addFirst(15);
// list.addLast(35);
// list.addFirst(5);
// list.addAtIndex([1, 2, 3], 2);
// list.addLast(45);
// list.addAtIndex(25, 3);
// console.log(list.removeAtIndex(4));
// console.log(list.print());
