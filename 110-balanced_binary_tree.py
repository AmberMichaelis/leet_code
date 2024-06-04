# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution(object):
    def isBalanced(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        def check(node):
            if not node:
                return 0, True
            
            left_height, left_balanced = check(node.left)
            right_height, right_balanced = check(node.right)
            
            current_height = max(left_height, right_height) + 1
            is_balanced = left_balanced and right_balanced and abs(left_height - right_height) <= 1
            
            return current_height, is_balanced
        
        return check(root)[1]

# Example usage:
# Construct the binary tree: 3
#                           / \
#                          9  20
#                            /  \
#                           15   7
root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.right.left = TreeNode(15)
root.right.right = TreeNode(7)

sol = Solution()
print(sol.isBalanced(root))  # Output: True
