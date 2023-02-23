/* You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 * 
 * Example 1:
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * Explanation: The linked-lists are:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * merging them into one sorted list:
 * 1->1->2->3->4->4->5->6
 * 
 * Example 2:
 * Input: lists = []
 * Output: []
 * 
 * Example 3:
 * Input: lists = [[]]
 * Output: []
 * 
 * Constraints:
 * k == lists.length
 * 0 <= k <= 104
 * 0 <= lists[i].length <= 500
 * -104 <= lists[i][j] <= 104
 * lists[i] is sorted in ascending order.
 * The sum of lists[i].length will not exceed 104.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists == null || lists.length == 0) return null;
    return sortLinkedLists(lists, 0, lists.length - 1);
};

var sortLinkedLists = function (lists, lo, hi) {
    // If we no longer have multiple lists to merge, return the single LinkedList
    if (lo >= hi) return lists[lo];

    // Calculate the (rounded-down) middle point of the remaining lists
    let mid = Math.floor(lo + (hi - lo) / 2);

    // Merge and sort the left and middle lists
    let l1 = sortLinkedLists(lists, lo, mid);

    // Merge and sort the right and middle + 1 lists
    let l2 = sortLinkedLists(lists, mid + 1, hi);

    // Merge the two returned lists
    return merge(l1, l2);
};

var merge = function (l1, l2) {
    // If either list is empty, return the other list's node
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    // If l1 is lower
    if (l1.val < l2.val) {
        l1.next = merge(l1.next, l2);
        return l1;
    }
    // If l2 is lower
    else {
        l2.next = merge(l1, l2.next);
        return l2;
    }
};
