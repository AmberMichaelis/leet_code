// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function twoSum(nums, target) {
    let numObj = {};
      for (let i = 0; i < nums.length; i++) {
        let j = target - nums[i];
        if (numObj[j] !== undefined) {
          return [numObj[j], i];
        }
        numObj[nums[i]] = i;
      }
    }

console.log(twoSum([1,2,4,5,8], 7))


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
