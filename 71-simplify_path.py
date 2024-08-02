class Solution:
    def simplifyPath(self, path: str) -> str:
        # Split the input path by "/"
        components = path.split('/')
        stack = []
        
        for component in components:
            if component == '..':
                if stack:
                    stack.pop()
            elif component and component != '.':
                stack.append(component)
        
        # Join the components in the stack with "/"
        return '/' + '/'.join(stack)
