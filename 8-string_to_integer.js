/**
 * Converts a string to a 32-bit signed integer following the atoi rules.
 * @param {string} s - The input string.
 * @return {number} - The converted integer.
 */
function myAtoi(s) {
    // Step 1: Trim leading and trailing spaces
    s = s.trim();
    
    if (s.length === 0) return 0; // Return 0 if string is empty after trimming
    
    let index = 0, sign = 1, result = 0;
    
    // Step 2: Check for sign
    if (s[index] === '+' || s[index] === '-') {
        sign = s[index] === '-' ? -1 : 1;
        index++; // Move to the next character
    }
    
    // Step 3: Convert numeric characters to an integer
    while (index < s.length && s[index] >= '0' && s[index] <= '9') {
        result = result * 10 + (s[index] - '0');
        index++;
    }
    
    // Step 4: Apply sign
    result *= sign;
    
    // Step 5: Clamp the value to 32-bit signed integer range
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);
    
    if (result > INT_MAX) return INT_MAX;
    if (result < INT_MIN) return INT_MIN;
    
    return result;
}

// Example test cases
console.log(myAtoi("42")); // Output: 42
console.log(myAtoi("   -42")); // Output: -42
console.log(myAtoi("4193 with words")); // Output: 4193
console.log(myAtoi("words and 987")); // Output: 0
console.log(myAtoi("-91283472332")); // Output: -2147483648 (clamped to INT_MIN)
