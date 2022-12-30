/* Given the root of a binary tree, return the inorder traversal of its nodes' values.
 *
 * Example 1:
 * 
 *   1
 *     2
 *   3
 * 
 * Input: root = [1,null,2,3]
 * Output: [1,3,2]
 * 
 * Example 2:
 * Input: root = []
 * Output: []
 * 
 * Example 3:
 * Input: root = [1]
 * Output: [1]
 * 
 * Example 4:
 * 
 *    1
 *  2
 * 
 * Input: root = [1,2]
 * Output: [2,1]
 * 
 * Example 5:
 * 
 *  1
 *    2
 * 
 * Input: root = [1,null,2]
 * Output: [1,2]
 * 
 * Constraints:
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let stack = [];
    let result = [];

    while (root || stack.length !== 0) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        result.push(root.val);
        root = root.right;
    }
    return result;
}

/* Explanation:
 * 1: Create empty array variables, stack and result
 * 2: While there is a root or the stack array is not empty,
 *      3: While there is a root
 *          4: Push the root into the stack <- smallest values will end up at the top of the stack
 *          5: Reassign root to be its left child, and repeat while loop from step 3
 *      6: Reassign root to be the last element in the stack array (which will be the smallest value)
 *      7: Push root's value into result array
 *      8: Reassign root to be its right child, and then repeat while loop from step 2
 * 9: When there are no more roots and the stack array is empty, return result
 */
