var longestValidParentheses = function(s) {
    // Initialize a stack with -1 to handle edge case
    let stack = [-1];
    let maxLength = 0; // Variable to store the maximum length of valid parentheses substring

    // Iterate over the string
    for (let i = 0; i < s.length; i++) {
        // If we encounter an opening parenthesis, push its index onto the stack
        if (s[i] === '(') {
            stack.push(i);
        } else {
            // If we encounter a closing parenthesis, pop the top element from the stack
            stack.pop();

            // If the stack is not empty, calculate the valid substring length
            if (stack.length > 0) {
                // The current valid substring length is the difference between the current index and the index at the top of the stack
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            } else {
                // If the stack is empty, push the current index as a base for the next valid substring
                stack.push(i);
            }
        }
    }

    // Return the maximum valid parentheses length found
    return maxLength;
};
