/* Given a sorted array of distinct integers and a target value, return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * 
 * Example 2:
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 * 
 * Example 3:
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums[nums.length - 1] < target) return nums.length;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] >= target) {
            return i
        };
    };
    return nums.length - 1;
};

/* Explanation:
 * Check if last value in nums is less than target.
 * If so, return nums.length.
 * Loop through all of the values in nums.
 * Check if each value is greater than or equal to target.
 * If so, return the index of that value.
 * After looping through all of nums, return nums.length - 1.
 */
