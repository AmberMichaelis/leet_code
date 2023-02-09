# Given a string s, find the length of the longest substring without repeating characters.
#
# Example 1:
# Input: s = "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.
# 
# Example 2:
# Input: s = "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.
# 
# Example 3:
# Input: s = "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
# Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
# 
# Constraints:
# 0 <= s.length <= 5 * 10^4
# s consists of English letters, digits, symbols and spaces.
#

# @param {String} s
# @return {Integer}
def length_of_longest_substring(s)
    max = 0
    start_index = -1
    char_to_index_map = {}

    s.chars.each_with_index do |c, i|
        if current_index = char_to_index_map[c] and current_index > start_index
            start_index = current_index
        end
        char_to_index_map[c] = i 
        new_length = i - start_index
        max = new_length if max < new_length
    end
    max
    
end

puts(length_of_longest_substring("abcabcbb"))
