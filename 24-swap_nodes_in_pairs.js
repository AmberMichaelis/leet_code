/* Given a linked list, swap every two adjacent nodes and return its head. 
 * You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
 *
 * Example 1:
 * 1 -> 2 -> 3 -> 4
 * 2 -> 1 -> 4 -> 3
 * 
 * Input: head = [1,2,3,4]
 * Output: [2,1,4,3]
 * 
 * Example 2:
 * Input: head = []
 * Output: []
 * 
 * Example 3:
 * Input: head = [1]
 * Output: [1]
 *  
 * 
 * Constraints:
 * The number of nodes in the list is in the range [0, 100].
 * 0 <= Node.val <= 100
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
    // Initialise a dummy list containing the provided one
    let dummyList = new ListNode(null, head);

    // Create a copy of the dummy list which we can traverse with
    let current = dummyList;

    // While there are 2 additional elements remaining
    while (current.next && current.next.next) {
        // Obtain the nodes to be swapped
        const first = current.next;
        const second = current.next.next;

        // Swap the nodes
        first.next = second.next;
        second.next = first;
        current.next = second;

        // Move forward by 2 elements
        current = current.next.next;
    }

    // Return the swapped LinkedList, removing the dummy head
    return dummyList.next;
};
