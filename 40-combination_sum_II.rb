# Given a collection of candidate numbers (candidates) and a target number (target), 
# find all unique combinations in candidates where the candidate numbers sum to target.
# Each number in candidates may only be used once in the combination.
# Note: The solution set must not contain duplicate combinations.
# 
# Example 1:
# Input: candidates = [10,1,2,7,6,1,5], target = 8
# Output: 
# [
# [1,1,6],
# [1,2,5],
# [1,7],
# [2,6]
# ]
# 
# Example 2:
# Input: candidates = [2,5,2,1,2], target = 5
# Output: 
# [
# [1,2,2],
# [5]
# ]
# 
# Constraints:
# 1 <= candidates.length <= 100
# 1 <= candidates[i] <= 50
# 1 <= target <= 30
#

# @param {Integer[]} candidates
# @param {Integer} target
# @return {Integer[][]}
def combination_sum2(candidates, target)
    result = []
    candidates.sort!
    backtrack(candidates, target, [], result)
    return result
  end
  
  def backtrack(candidates, target, temp, result)
    if target == 0
      result << temp.dup
      return
    end
    
    for i in 0...candidates.length
      next if i > 0 && candidates[i] == candidates[i-1]
      if candidates[i] <= target
        temp << candidates[i]
        backtrack(candidates[i+1..-1], target-candidates[i], temp, result)
        temp.pop
      end
    end
  end
