/* You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 * 
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Example 2:
 * Input: list1 = [], list2 = []
 * Output: []
 * 
 * Example 3:
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 * 
 * Constraints:
 * The number of nodes in both lists is in the range [0, 50].
 * -100 <= Node.val <= 100
 * Both list1 and list2 are sorted in non-decreasing order.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // If either list is empty, return the other list
    if (!list1) return list2;
    if (!list2) return list1;

    // If value in list1 is less than value in list2
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    // If value in list2 is less than or equal to value in list1
    else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};


console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])) // [1,1,2,3,4,4]
console.log(mergeTwoLists([-4, -2, -1], [-4, -3, -1])) // [-4,-4,-3,-2,-1,-1]
console.log(mergeTwoLists([], [])) // []
console.log(mergeTwoLists([], [0])) // [0]

/* Explanation:
 * Compare the first value in list1 with the first value in list2.
 *
 * If list1 has the lower value, its next value is set equal to the 
 * lower number between the second value in list1 and the first value 
 * in list2.
 * 
 * Continue comparing until each next value is set to the next lower value
 * between the two lists.
 * 
 * It's similar to Problem 88 Merge Sorted Array in which you use three pointers
 * to compare the next two values and insert it at the third pointer.
 */
