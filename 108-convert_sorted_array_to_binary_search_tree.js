/* Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
 *
 * Example 1:
 *        0
 *    -3     9
 * -10     5
 * 
 * Input: nums = [-10,-3,0,5,9]
 * Explanation: [0,-10,5,null,-3,null,9] is also accepted:
 *        0
 *   -10     5
 *     -3      9
 * 
 * Example 2:
 *    3     1
 *  1         3
 * Input: nums = [1,3]
 * Output: [3,1]
 * Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
 * 
 * Constraints:
 * 1 <= nums.length <= 104
 * -104 <= nums[i] <= 104
 * Output: [0,-3,9,-10,null,5]
 * nums is sorted in a strictly increasing order.
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    //base cases
    if (nums.length === 1) return new TreeNode(nums[0]);
    if (nums.length === 0) return null;

    //create a new TreeNode(center)
    let centerIdx = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[centerIdx]);

    //set left node to center of left subtree
    let leftSubtree = nums.slice(0, centerIdx);
    root.left = sortedArrayToBST(leftSubtree);

    //set right node to center of right subtree
    let rightSubtree = nums.slice(centerIdx + 1, nums.length);
    root.right = sortedArrayToBST(rightSubtree);

    return root;
};
