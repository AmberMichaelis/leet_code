# The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
# 
# countAndSay(1) = "1"
# countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), 
# which is then converted into a different digit string.
# To determine how you "say" a digit string, split it into the minimal number of substrings 
# such that each substring contains exactly one unique digit. 
# Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.
# 
# For example, the saying and conversion for digit string "3322251":
# Given a positive integer n, return the nth term of the count-and-say sequence.
# 
# Example 1:
# Input: n = 1
# Output: "1"
# Explanation: This is the base case.
# 
# Example 2:
# Input: n = 4
# Output: "1211"
# Explanation:
# countAndSay(1) = "1"
# countAndSay(2) = say "1" = one 1 = "11"
# countAndSay(3) = say "11" = two 1's = "21"
# countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
# 
# Constraints:
# 1 <= n <= 30
#

# @param {Integer} n
# @return {String}
def count_and_say(n)
    return "1" if n == 1
    return "11" if n == 2
  
    result = "1"
    (2..n).each do
      result = read(result)
    end
  
    result
  end
  
  # "1211" => "111221"
  def read(str)
    result = ""
  
    str_characters = str.to_s.split("")
  
    buffer = []
    str_characters.each_with_index do |character, index|
  
      if buffer.empty?
        buffer << character
      else
        if buffer.first == character
          buffer << character
        else
          result << read_unit(buffer)
  
          # 清空buffer; 将character push 进去
          buffer = [character]
        end
      end
    end
  
    unless buffer.empty?
      result << read_unit(buffer)
    end
  
    result
  end
  
  # 1 => 11
  # 2 => 12
  # 11 => 21
  # 111 => 31
  def read_unit(buffer)
    "#{buffer.size}#{buffer.first}"
  end
