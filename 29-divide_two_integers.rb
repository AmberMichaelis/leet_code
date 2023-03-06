# Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.
# The integer division should truncate toward zero, which means losing its fractional part. 
# For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.
#
# Return the quotient after dividing dividend by divisor.
# 
# Note: Assume we are dealing with an environment that could only store integers 
# within the 32-bit signed integer range: [−2^31, 2^31 − 1].
# For this problem, if the quotient is strictly greater than 2^31 - 1, then return 2^31 - 1,
# and if the quotient is strictly less than -2^31, then return -2^31.
# 
# Example 1:
# Input: dividend = 10, divisor = 3
# Output: 3
# Explanation: 10/3 = 3.33333.. which is truncated to 3.
# 
# Example 2:
# Input: dividend = 7, divisor = -3
# Output: -2
# Explanation: 7/-3 = -2.33333.. which is truncated to -2.
# 
# Constraints:
# -2^31 <= dividend, divisor <= 2^31 - 1
# divisor != 0
#

# @param {Integer} dividend
# @param {Integer} divisor
# @return {Integer}
def divide(dividend, divisor)
    negative_sign = (dividend < 0) ^ (divisor < 0)
    
    dividend = dividend.abs
    divisor = divisor.abs
        
    return 0 if dividend < divisor
    
    quotient_string = ''
    dividend = dividend.to_s
    dividend_i = 0
    ldivision_result = dividend[0]
    using_remainder = false
    fit_last_time = true
    
    while dividend_i < dividend.length
        times_it_fits, remainder = times_it_fits_in_mod(divisor, ldivision_result.to_i)
        
        if times_it_fits == 0
            if quotient_string.length > 0 && (!using_remainder || !fit_last_time)
                quotient_string += '0'
            end
            fit_last_time = false
            dividend_i += 1
            ldivision_result += dividend[dividend_i].to_s
        else
            fit_last_time = true
            quotient_string += times_it_fits.to_s
            if remainder == 0
                dividend_i += 1
                ldivision_result = dividend[dividend_i]
                using_remainder = false
            else
                ldivision_result = remainder.to_s
                using_remainder = true
            end
            break if dividend_i == dividend.length
        end        
    end
  
    quotient = negative_sign ? "-#{quotient_string}".to_i : quotient_string.to_i

    if quotient < -2**31
        -2**31
    elsif quotient > 2**31 - 1
        2**31-1
    else
        quotient
    end
end

def times_it_fits_in_mod(first_number, target_number)
    return 0 if first_number == 0
    times = 0
    product = 0
    
    while product+first_number <= target_number
        product += first_number 
        times += 1
    end
    
    [times, target_number - product]
end
