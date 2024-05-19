class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: None
        """
        # Start from the end of both nums1 and nums2
        # and from the end of the final merged array
        p1 = m - 1
        p2 = n - 1
        p = m + n - 1

        # While there are still elements to compare
        while p1 >= 0 and p2 >= 0:
            # Compare and place the larger element at the end of nums1
            if nums1[p1] > nums2[p2]:
                nums1[p] = nums1[p1]
                p1 -= 1
            else:
                nums1[p] = nums2[p2]
                p2 -= 1
            p -= 1

        # If there are remaining elements in nums2, copy them
        # This is necessary if nums1 initially contains all larger elements
        nums1[:p2 + 1] = nums2[:p2 + 1]

# Example usage:
sol = Solution()
nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2, 5, 6]
n = 3
sol.merge(nums1, m, nums2, n)
print(nums1)  # Output: [1, 2, 2, 3, 5, 6]
