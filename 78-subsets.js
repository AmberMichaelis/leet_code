/* Given an integer array nums of unique elements, return all possible subsets (the power set).
 * 
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 * 
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * Example 2:
 * Input: nums = [0]
 * Output: [[],[0]]
 *  
 * Constraints:
 * 1 <= nums.length <= 10
 * -10 <= nums[i] <= 10
 * All the numbers of nums are unique.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    var res = [];
    helper(nums, res, [], 0);
    return res;
};

var helper = function (nums, res, arr, start) {
    var len = nums.length;

    res.push(Array.from(arr));

    if (start === len) return;

    for (var i = start; i < len; i++) {
        arr.push(nums[i]);
        helper(nums, res, arr, i + 1);
        arr.pop();
    }
};
