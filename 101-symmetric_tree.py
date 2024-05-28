class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
class Solution(object):
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root:
            return True
        
        queue = [(root.left, root.right)]
        
        while queue:
            t1, t2 = queue.pop(0)
            
            if not t1 and not t2:
                continue
            if not t1 or not t2:
                return False
            if t1.val != t2.val:
                return False
            
            queue.append((t1.left, t2.right))
            queue.append((t1.right, t2.left))
        
        return True

# Example usage:
# Tree:     1
#         /   \
#        2     2
#       / \   / \
#      3   4 4   3
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(2)
root.left.left = TreeNode(3)
root.left.right = TreeNode(4)
root.right.left = TreeNode(4)
root.right.right = TreeNode(3)

sol = Solution()
print(sol.isSymmetric(root))  # Output: True
