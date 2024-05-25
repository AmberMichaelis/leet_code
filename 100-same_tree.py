# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution(object):
    def isSameTree(self, p, q):
        """
        :type p: TreeNode
        :type q: TreeNode
        :rtype: bool
        """
        # Both trees are empty
        if not p and not q:
            return True
        # One of the trees is empty
        if not p or not q:
            return False
        # The values of the current nodes are different
        if p.val != q.val:
            return False
        # Recursively check the left and right subtrees
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)

# Example usage:
# Tree 1:    1         Tree 2:    1
#           / \                 / \
#          2   3               2   3
p = TreeNode(1)
p.left = TreeNode(2)
p.right = TreeNode(3)

q = TreeNode(1)
q.left = TreeNode(2)
q.right = TreeNode(3)

sol = Solution()
print(sol.isSameTree(p,q))
