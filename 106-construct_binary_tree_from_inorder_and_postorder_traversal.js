/* Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree 
 * and postorder is the postorder traversal of the same tree, construct and return the binary tree.
 * 
 * Example 1:
 * Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
 * Output: [3,9,20,null,null,15,7]
 * 
 * Example 2:
 * Input: inorder = [-1], postorder = [-1]
 * Output: [-1]
 * 
 * Constraints:
 * 1 <= inorder.length <= 3000
 * postorder.length == inorder.length
 * -3000 <= inorder[i], postorder[i] <= 3000
 * inorder and postorder consist of unique values.
 * Each value of postorder also appears in inorder.
 * inorder is guaranteed to be the inorder traversal of the tree.
 * postorder is guaranteed to be the postorder traversal of the tree.
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    return helper(inorder, postorder, 0, inorder.length - 1, postorder.length - 1);
};

var helper = function (inorder, postorder, inStart, inEnd, postIndex) {
    if (inStart > inEnd || postIndex < 0) return null;

    var index = 0;
    var root = new TreeNode(postorder[postIndex]);

    for (var i = inStart; i <= inEnd; i++) {
        if (inorder[i] === root.val) {
            index = i;
            break;
        }
    }

    root.right = helper(inorder, postorder, index + 1, inEnd, postIndex - 1);
    root.left = helper(inorder, postorder, inStart, index - 1, postIndex - 1 - (inEnd - index));

    return root;
};

