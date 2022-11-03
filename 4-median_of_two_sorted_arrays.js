/* Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * 
 * The overall run time complexity should be O(log (m+n)).
 * 
 * Example 1:
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 * 
 * Example 2:
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 *  
 * 
 * Constraints:
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
    let arr = [];
    let totalLen = nums1.length + nums2.length;

    if (totalLen === 1) {
        return nums1.length === 1 ? nums1[0] : nums2[0];
    }

    let arr_len = totalLen % 2 === 0 ? (totalLen / 2 + 1) : Math.ceil(totalLen / 2)

    let i = 0;
    let j = 0;

    while (arr.length < arr_len) {
        if (i < nums1.length && j < nums2.length) {
            if (nums1[i] <= nums2[j]) {
                arr.push(nums1[i]);
                i++;
            } else {
                arr.push(nums2[j]);
                j++;
            }
        } else if (i >= nums1.length) {
            arr.push(nums2[j]);
            j++;
        } else {
            arr.push(nums1[i]);
            i++;
        }
    }
    return totalLen % 2 === 0 ? (arr[arr.length - 1] + arr[arr.length - 2]) / 2 : arr[arr.length - 1];
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
