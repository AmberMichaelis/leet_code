class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        # Handle edge cases
        if dividend == 0:
            return 0
        if divisor == 0:
            raise ValueError("Division by zero is undefined")
        
        # Determine the sign of the result
        negative = (dividend < 0) != (divisor < 0)
        
        # Convert to positive and initialize variables
        dividend, divisor = abs(dividend), abs(divisor)
        quotient = 0
        
        # Perform the division using subtraction
        while dividend >= divisor:
            temp_divisor, num_divisors = divisor, 1
            while dividend >= (temp_divisor << 1):
                temp_divisor <<= 1
                num_divisors <<= 1
            dividend -= temp_divisor
            quotient += num_divisors
        
        # Apply the sign to the quotient
        if negative:
            quotient = -quotient
        
        # Handle overflow
        return min(max(-2**31, quotient), 2**31 - 1)
