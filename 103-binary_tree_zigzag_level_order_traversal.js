/* Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. 
 * (i.e., from left to right, then right to left for the next level and alternate between).
 * 
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[20,9],[15,7]]
 * 
 * Example 2:
 * Input: root = [1]
 * Output: [[1]]
 * 
 * Example 3:
 * Input: root = []
 * Output: []
 *  
 * Constraints:
 * The number of nodes in the tree is in the range [0, 2000].
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    return helper([[root]], 0);
};

var helper = function (res, level) {
    var now = res[level];
    var next = [];

    for (var i = now.length - 1; i >= 0; i--) {
        if (level % 2) {
            if (now[i].left) next.push(now[i].left);
            if (now[i].right) next.push(now[i].right);
        } else {
            if (now[i].right) next.push(now[i].right);
            if (now[i].left) next.push(now[i].left);
        }

        now[i] = now[i].val;
    }

    if (next.length) {
        res.push(next);
        helper(res, level + 1);
    }

    return res;
};
