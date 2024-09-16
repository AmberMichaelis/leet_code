class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        if not node:
            return None
        
        # A dictionary to keep track of copied nodes
        cloned_nodes = {}
        
        # Helper function to perform DFS and clone the graph
        def dfs(node):
            # If the node has already been cloned, return the clone
            if node in cloned_nodes:
                return cloned_nodes[node]
            
            # Clone the current node
            copy = Node(node.val)
            cloned_nodes[node] = copy
            
            # Clone all the neighbors
            for neighbor in node.neighbors:
                copy.neighbors.append(dfs(neighbor))
            
            return copy
        
        # Start DFS from the given node
        return dfs(node)
