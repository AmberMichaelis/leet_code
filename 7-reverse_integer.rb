# Given a signed 32-bit integer x, return x with its digits reversed. 
# If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
# 
# Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
# 
# Example 1:
# Input: x = 123
# Output: 321
# 
# Example 2:
# Input: x = -123
# Output: -321
# 
# Example 3:
# Input: x = 120
# Output: 21
#  
# 
# Constraints:
# -2^31 <= x <= 2^31 - 1
#

def reverse(x)
    i = 0
    neg = x < 0
    x.to_s
    x.length % 2 == 0 ? (half = x.length / 2) : (half = (x.length + 1) / 2)
    len = x.length - 1
    while i < half
        temp = x[i]
        x[i] = x[len - i]
        x[len - i] = temp
        i++
    end
    x.to_i
    return 0 if (x < -2147483646 || x > 2147483646)
    return neg ? -x : x
end
