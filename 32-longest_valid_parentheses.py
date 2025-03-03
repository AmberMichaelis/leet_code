def longestValidParentheses(s: str) -> int:
    """
    This function returns the length of the longest valid (well-formed) 
    parentheses substring within the given string s.

    Approach:
    1. Use a stack to store indices of parentheses.
    2. Push -1 onto the stack initially to mark the base of a valid substring.
    3. Iterate through the string:
       - If we see '(', push its index onto the stack.
       - If we see ')', pop the top of the stack.
         * If the stack is not empty after popping, calculate the length of 
           the valid substring using the current index minus the new top of 
           the stack. Update max_length if needed.
         * If the stack is empty after popping, push the current index 
           onto the stack to mark a new base for valid substrings.
    4. Return the max_length found during the iteration.

    Time Complexity: O(n), where n is the length of the string
    Space Complexity: O(n) in the worst case (stack usage)
    """

    # Stack initialized with -1 to mark the start of a valid substring
    stack = [-1]
    max_length = 0  # Track the maximum length of valid parentheses

    for i, char in enumerate(s):
        if char == '(':
            # Push the index of '(' onto the stack
            stack.append(i)
        else:
            # Pop the top of the stack (matching '(' index or a base index)
            stack.pop()

            if stack:
                # If stack is not empty, the current valid substring length
                # is the difference between the current index and the top of the stack
                current_length = i - stack[-1]
                max_length = max(max_length, current_length)
            else:
                # If stack is empty, push the current index as a new base
                stack.append(i)

    return max_length


# Example Usage:
if __name__ == "__main__":
    # Sample test
    test_string = "(()())"
    print(longestValidParentheses(test_string))  # Output: 6
