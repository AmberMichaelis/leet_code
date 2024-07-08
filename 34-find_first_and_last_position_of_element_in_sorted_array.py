from typing import List

class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        def findBound(isFirst):
            left, right = 0, len(nums) - 1
            while left <= right:
                mid = (left + right) // 2
                if nums[mid] == target:
                    if isFirst:
                        if mid == left or nums[mid - 1] != target:
                            return mid
                        right = mid - 1
                    else:
                        if mid == right or nums[mid + 1] != target:
                            return mid
                        left = mid + 1
                elif nums[mid] < target:
                    left = mid + 1
                else:
                    right = mid - 1
            return -1
        
        firstPos = findBound(True)
        if firstPos == -1:
            return [-1, -1]
        lastPos = findBound(False)
        return [firstPos, lastPos]
