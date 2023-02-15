# Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
# 
# The overall run time complexity should be O(log (m+n)).
# 
# Example 1:
# Input: nums1 = [1,3], nums2 = [2]
# Output: 2.00000
# Explanation: merged array = [1,2,3] and median is 2.
# 
# Example 2:
# Input: nums1 = [1,2], nums2 = [3,4]
# Output: 2.50000
# Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
#  
# 
# Constraints:
# nums1.length == m
# nums2.length == n
# 0 <= m <= 1000
# 0 <= n <= 1000
# 1 <= m + n <= 2000
# -10^6 <= nums1[i], nums2[i] <= 10^6
#

# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}
def find_median_sorted_arrays(nums1, nums2)
    m, n = nums1.size, nums2.size
    return find_median_sorted_arrays(nums2, nums1) if m > n
    l = m + n 
    i, j = kth(nums1, nums2, (l+1)/2)
    nextfew = (nums1[i,2] + nums2[j,2]).sort
    (nextfew[0] + nextfew[1 - l % 2]) / 2.0
end

def kth(nums1, nums2, k)
    return [0,0] if k == 1
    m, n = nums1.length, nums2.length 
    merged = k - 1
    nums1_start = [merged - n, 0].max 
    nums1_end = [m, merged].min 
    i = (nums1_start..nums1_end).bsearch do |i|
        i == m || merged - i - 1 < 0 || nums2[merged - i - 1] < nums1[i]
    end
    [i, merged - i]
end
