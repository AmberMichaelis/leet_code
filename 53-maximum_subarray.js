/* Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 *
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 * 
 * Example 2:
 * Input: nums = [1]
 * Output: 1
 * 
 * Example 3:
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 0) return undefined;
    if (nums.length === 1) return nums[0];
    let currentTotal = 0;
    let maxSum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        currentTotal += nums[i]
        if (currentTotal >= maxSum) {
            maxSum = currentTotal
            console.log(`currentTotal: ${currentTotal}. maxSum: ${maxSum}.`)
        } else {
            currentTotal = 0;
        }
    }
    return maxSum
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
console.log(maxSubArray([1])) // 1
console.log(maxSubArray([1, 3, -2, 5])) // 5
// console.log(maxSubArray([5, 4, -1, 7, 8]))// 23
