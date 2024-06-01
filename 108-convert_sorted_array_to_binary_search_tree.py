# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution(object):
    def sortedArrayToBST(self, nums):
        """
        :type nums: List[int]
        :rtype: TreeNode
        """
        if not nums:
            return None
        
        return self.helper(nums, 0, len(nums) - 1)

    def helper(self, nums, left, right):
        if left > right:
            return None
        
        # Always choose middle element as root
        mid = (left + right) // 2
        
        # Preorder traversal: node -> left -> right
        root = TreeNode(nums[mid])
        root.left = self.helper(nums, left, mid - 1)
        root.right = self.helper(nums, mid + 1, right)
        
        return root

# Example usage:
sol = Solution()
nums = [-10, -3, 0, 5, 9]
tree = sol.sortedArrayToBST(nums)

def preorder(node):
    if not node:
        return []
    return [node.val] + preorder(node.left) + preorder(node.right)

print(preorder(tree))  # Output: [0, -3, -10, 5, 9]
