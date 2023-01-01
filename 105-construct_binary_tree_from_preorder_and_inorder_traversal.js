/* Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and 
 * inorder is the inorder traversal of the same tree, construct and return the binary tree.
 *
 * Example 1:
 * Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
 * Output: [3,9,20,null,null,15,7]
 * 
 * Example 2:
 * Input: preorder = [-1], inorder = [-1]
 * Output: [-1]
 * 
 * Constraints:
 * 1 <= preorder.length <= 3000
 * inorder.length == preorder.length
 * -3000 <= preorder[i], inorder[i] <= 3000
 * preorder and inorder consist of unique values.
 * Each value of inorder also appears in preorder.
 * preorder is guaranteed to be the preorder traversal of the tree.
 * inorder is guaranteed to be the inorder traversal of the tree.
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    return helper(preorder, inorder, 0, 0, inorder.length - 1);
};

var helper = function (preorder, inorder, preIndex, inStart, inEnd) {
    if (preIndex >= preorder.length || inStart > inEnd) return null;

    var index = 0;
    var root = new TreeNode(preorder[preIndex]);

    for (var i = inStart; i <= inEnd; i++) {
        if (inorder[i] === root.val) {
            index = i;
            break;
        }
    }

    if (index > inStart) root.left = helper(preorder, inorder, preIndex + 1, inStart, index - 1);
    if (index < inEnd) root.right = helper(preorder, inorder, preIndex + index - inStart + 1, index + 1, inEnd);

    return root;
};
