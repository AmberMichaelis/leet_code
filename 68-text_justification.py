from typing import List

class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        res = []  # Stores the justified text lines
        cur_words = []  # Stores words for the current line
        cur_length = 0  # Length of words (excluding spaces)

        for word in words:
            # Check if adding this word would exceed maxWidth
            if cur_length + len(word) + len(cur_words) > maxWidth:
                # Distribute spaces
                for i in range(maxWidth - cur_length):
                    cur_words[i % (len(cur_words) - 1 or 1)] += " "
                res.append("".join(cur_words))
                cur_words, cur_length = [], 0
            
            # Add the word to the current line
            cur_words.append(word)
            cur_length += len(word)
        
        # Handle the last line (left-justified)
        res.append(" ".join(cur_words).ljust(maxWidth))
        
        return res

# Example Usage
solution = Solution()
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
output = solution.fullJustify(words, maxWidth)
for line in output:
    print(f'"{line}"')  # Printing for clarity
