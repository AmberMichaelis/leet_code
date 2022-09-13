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
