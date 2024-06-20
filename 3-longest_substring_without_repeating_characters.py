class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # Dictionary to store the last seen position of each character
        char_map = {}
        # Initialize the start of the window and the maximum length
        start = 0
        max_length = 0
        
        for end in range(len(s)):
            # If the character is already in the dictionary and is within the current window
            if s[end] in char_map and char_map[s[end]] >= start:
                # Move the start of the window to the right of the last occurrence
                start = char_map[s[end]] + 1
            
            # Update the last seen position of the current character
            char_map[s[end]] = end
            # Update the maximum length if needed
            max_length = max(max_length, end - start + 1)
        
        return max_length
