/* You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * 
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
 * To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
 * and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 * 
 * Example 1:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 * 
 * Example 2:
 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 * Explanation: The arrays we are merging are [1] and [].
 * The result of the merge is [1].
 * 
 * Example 3:
 * Input: nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: [1]
 * Explanation: The arrays we are merging are [] and [1].
 * The result of the merge is [1].
 * Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 * 
 * Constraints:
 * nums1.length == m + n
 * nums2.length == n
 * 0 <= m, n <= 200
 * 1 <= m + n <= 200
 * -10^9 <= nums1[i], nums2[j] <= 10^9
 * 
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    var frontIndex = m - 1; // 2
    var nums2Index = n - 1; // 0
    var backIndex = m + n - 1; // 3
    while (nums2Index >= 0) {
        nums1[backIndex--] = frontIndex >= 0 && nums1[frontIndex] > nums2[nums2Index] ? nums1[frontIndex--] : nums2[nums2Index--];
    }
    // console.log(nums1);
};

merge([2, 3, 5, 0], 3, [1], 1); // [2, 3, 5, 1]
merge([2, 3, 5, 0, 0], 3, [1, 4], 2); // [2, 3, 5, 1, 4]
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1, 2, 2, 3, 5, 6]

/* Explanation:
 * For each of the values in nums2...
 * If value in frontIndex is bigger than value in nums2Index, 
 * then copy the frontIndex value into the backIndex and increament both indicies.
 * Else copy the nums2Index value into the backIndex and increament both indicies.
 * 
 * Three pointers. 
 * backIndex points to the last index in nums1 (zero).
 * Moving backwards in nums1 and nums2,
 * Compare the values in nums1 and nums2 and copy the highest value into backIndex
 * 
 */
