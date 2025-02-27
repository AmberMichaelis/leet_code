from collections import Counter

def findSubstring(s: str, words: list) -> list:
    if not s or not words or not words[0]:  # Edge case check
        return []
    
    word_length = len(words[0])  # Length of each word (all are the same length)
    word_count = len(words)  # Number of words
    substring_length = word_length * word_count  # Total length of the concatenated substring
    word_freq = Counter(words)  # Count occurrences of each word
    result = []  # List to store valid starting indices
    
    # Iterate over possible starting points within a word-length window
    for i in range(word_length):
        left = i  # Start of the current window
        right = i  # End of the current window
        current_window = Counter()  # Track words seen in the current window
        words_used = 0  # Count of valid words used
        
        while right + word_length <= len(s):  # Ensure we do not exceed the string length
            word = s[right:right + word_length]  # Extract the next word
            right += word_length  # Move the right pointer forward
            
            if word in word_freq:  # If it's a valid word
                current_window[word] += 1
                words_used += 1
                
                # If we have too many occurrences of a word, shrink the window from the left
                while current_window[word] > word_freq[word]:
                    leftmost_word = s[left:left + word_length]
                    left += word_length
                    current_window[leftmost_word] -= 1
                    words_used -= 1
                
                # If we have used all words exactly once, store the start index
                if words_used == word_count:
                    result.append(left)
            
            else:  # If an invalid word is found, reset window
                current_window.clear()
                words_used = 0
                left = right  # Move left pointer to restart from next valid position
    
    return result  # Return all valid starting indices
