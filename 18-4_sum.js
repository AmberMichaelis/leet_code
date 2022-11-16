/* Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
 * 
 * 0 <= a, b, c, d < n
 * a, b, c, and d are distinct.
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * You may return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [1,0,-1,0,-2,2], target = 0
 * Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 * 
 * Example 2:
 * Input: nums = [2,2,2,2,2], target = 8
 * Output: [[2,2,2,2]]
 *  
 * Constraints:
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length < 4) return [];

    var len = nums.length;
    var res = [];
    var l = 0;
    var r = 0;
    var sum = 0;

    nums.sort((a, b) => (a - b));

    for (var i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
        if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue;

        for (var j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
            if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) continue;

            l = j + 1;
            r = len - 1;

            while (l < r) {
                sum = nums[i] + nums[j] + nums[l] + nums[r];

                if (sum < target) {
                    l++;
                } else if (sum > target) {
                    r--;
                } else {
                    res.push([nums[i], nums[j], nums[l], nums[r]]);
                    while (l < r && nums[l] === nums[l + 1]) l++;
                    while (l < r && nums[r] === nums[r - 1]) r--;
                    l++;
                    r--;
                }
            }
        }
    }

    return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2, 2, 2, 2, 2]), 8) // [[2,2,2,2]]
