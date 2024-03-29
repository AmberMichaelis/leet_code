/* Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * Example 2:
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 * 
 * Example 3:
 * Input: nums = [1]
 * Output: [[1]]
 *  
 * Constraints:
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * All the integers of nums are unique.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var res = [];

    dfs(res, [], nums);

    return res;
};

var dfs = function (res, arr, nums) {
    var len = nums.length;
    var tmp1 = null;
    var tmp2 = null;

    if (!len) return res.push(arr);

    for (var i = 0; i < len; i++) {
        tmp1 = Array.from(arr);
        tmp1.push(nums[i]);

        tmp2 = Array.from(nums);
        tmp2.splice(i, 1);

        dfs(res, tmp1, tmp2);
    }
};

/* Explanation:
 * https://baffinlee.com/leetcode-javascript/problem/permutations.html
 */
