/* Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
 * 
 * Example 1:
 * Input: nums = [1,1,2]
 * Output: [[1,1,2],[1,2,1],[2,1,1]]
 * 
 * Example 2:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * Constraints:
 * 1 <= nums.length <= 8
 * -10 <= nums[i] <= 10
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    var res = [];

    nums.sort((a, b) => (a - b));
    dfs(res, [], nums);

    return res;
};

var dfs = function (res, arr, nums) {
    var len = nums.length;
    var tmp1 = null;
    var tmp2 = null;

    if (!len) return res.push(arr);

    for (var i = 0; i < len; i++) {
        if (nums[i] === nums[i - 1]) continue;

        tmp1 = Array.from(arr);
        tmp1.push(nums[i]);

        tmp2 = Array.from(nums);
        tmp2.splice(i, 1);

        dfs(res, tmp1, tmp2);
    }
};

/* Explanation:
 * https://baffinlee.com/leetcode-javascript/problem/permutations-ii.html
 */
