def myAtoi(s: str) -> int:
    # Step 1: Strip leading whitespaces from the input string
    s = s.lstrip()
    
    # Step 2: Handle edge case where the string becomes empty after trimming
    if not s:
        return 0
    
    # Step 3: Determine the sign of the number (+ or -)
    sign = 1
    if s[0] == '-':
        sign = -1
        s = s[1:]  # Remove the sign character
    elif s[0] == '+':
        s = s[1:]  # Remove the sign character
    
    # Step 4: Initialize result variable to store the number
    result = 0
    
    # Step 5: Process each character and convert digits to an integer
    for char in s:
        # If the character is a digit, add it to the result
        if char.isdigit():
            result = result * 10 + int(char)
        else:
            break  # Stop when we encounter a non-digit character
    
    # Step 6: Apply the sign to the result
    result *= sign
    
    # Step 7: Handle overflow cases, the result must be in the range [−2^31, 2^31 − 1]
    # Python's int type can handle large integers, but we need to clamp it to the 32-bit range.
    int_min, int_max = -2**31, 2**31 - 1
    if result < int_min:
        return int_min
    elif result > int_max:
        return int_max
    
    return result
