/* Given the head of a linked list, rotate the list to the right by k places.
 * 
 * Example 1:
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [4,5,1,2,3]
 * 
 * Example 2:
 * Input: head = [0,1,2], k = 4
 * Output: [2,0,1]
 * 
 * Constraints:
 * The number of nodes in the list is in the range [0, 500].
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 10^9
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    var count = 1;
    var last = head;
    var now = head;

    if (!head || !head.next) return head;

    while (last.next) {
        last = last.next;
        count++;
    }

    k %= count;

    if (k === 0) return head;

    while (k < count - 1) {
        now = now.next;
        k++;
    }

    last.next = head;
    head = now.next;
    now.next = null;

    return head;
};
