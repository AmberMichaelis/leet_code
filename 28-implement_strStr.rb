# Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
# or -1 if needle is not part of haystack.
# 
# Example 1:
# Input: haystack = "hello", needle = "ll"
# Output: 2
# 
# Example 2:
# Input: haystack = "aaaaa", needle = "bba"
# Output: -1
#

# @param {String} haystack
# @param {String} needle
# @return {Integer}
def str_str(haystack, needle)
    return 0 if needle.empty? 
   haystack.include?(needle) ? haystack.index(needle) : -1
end
