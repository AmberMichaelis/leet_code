class Solution(object):
    def lengthOfLastWord(self, s): 
        s = s.rstrip() 
        l = s.split() 
        return len(l[-1])

solution = Solution()
print(solution.lengthOfLastWord("Hello World"))
print(solution.lengthOfLastWord("   fly me   to   the moon  "))
print(solution.lengthOfLastWord("luffy is still joyboy"))
