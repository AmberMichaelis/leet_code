# Given a sorted array and a target value, return the index if the
# target is found. If not, return the index where it would be if it
# were inserted in order.
#
# You must write an algorithm with O(log n) runtime complexity.
#
# Example 1:
# Input: [1,3,5,6], 5
# Output: 2
#
# Example 2:
# Input: [1,3,5,6], 2
# Output: 1
#
# Example 3:
# Input: [1,3,5,6], 7
# Output: 4
#
# Example 4:
# Input: [1,3,5,6], 0
# Output: 0

# Constraints:
# 1 <= nums.length <= 10^4
# -10^4 <= nums[i] <= 10^4
# nums contains distinct values sorted in ascending order.
# -10^4 <= target <= 10^4

# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
    nums.each_with_index do |num, index|
      if target == num
        return index
      elsif target > num
        next
      else # target < num
        return index
      end
    end
    nums.size
  end
