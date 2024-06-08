# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution(object):
    def hasPathSum(self, root, targetSum):
        """
        :type root: TreeNode
        :type targetSum: int
        :rtype: bool
        """
        if not root:
            return False
        
        # Check if it's a leaf node and the targetSum is reached
        if not root.left and not root.right:
            return root.val == targetSum
        
        # Recursively check the left and right subtrees with the updated targetSum
        targetSum -= root.val
        return self.hasPathSum(root.left, targetSum) or self.hasPathSum(root.right, targetSum)

# Example usage:
# Construct the binary tree: 5
#                           / \
#                          4   8
#                         /   / \
#                        11  13  4
#                       /  \      \
#                      7    2      1
root = TreeNode(5)
root.left = TreeNode(4)
root.right = TreeNode(8)
root.left.left = TreeNode(11)
root.right.left = TreeNode(13)
root.right.right = TreeNode(4)
root.left.left.left = TreeNode(7)
root.left.left.right = TreeNode(2)
root.right.right.right = TreeNode(1)

sol = Solution()
targetSum = 22
print(sol.hasPathSum(root, targetSum))  # Output: True
