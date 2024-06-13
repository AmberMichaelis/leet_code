class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Normalize the string by converting to lowercase and removing non-alphanumeric characters
        normalized_str = ''.join(char.lower() for char in s if char.isalnum())
        
        # Check if the normalized string is equal to its reverse
        return normalized_str == normalized_str[::-1]
