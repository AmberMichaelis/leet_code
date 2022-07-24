/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */

var twoSum = function twoSum(nums, target) {
  let numObj = {};
  for (let i = 0; i < nums.length; i++) {
    let neededNum = target - nums[i];
    if (numObj[neededNum] !== undefined) {
      return [numObj[neededNum], i];
    }
    numObj[nums[i]] = i;
  }
}

console.log(twoSum([2,7,11,15], 9)) // [0, 1]
console.log(twoSum([3,2,4], 6)) // [1, 2]
console.log(twoSum([3,3], 6)) // [0, 1]

// Brute Force Method:

// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let k = i; k < nums.length; k++) {
//             if (nums[i] + nums[k] === target) {
//                 return [i, k]
//             }
//         }
//     }
// };
