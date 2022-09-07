/* Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. 
 * You may assume that the majority element always exists in the array.
 *
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 * 
 * Constraints:
 * n == nums.length
 * 1 <= n <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let list = {};
    for (let num of nums) {
        list[num] = list[num] + 1 || 1;
    }
    let values = Object.values(list);
    let majorityIndex = values.indexOf(Math.max(...values));
    let keys = Object.keys(list);

    return keys[majorityIndex];
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
