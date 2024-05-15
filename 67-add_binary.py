class Solution(object):
    def addBinary(self, a, b):
        """
        :type a: str
        :type b: str
        :rtype: str
        """
        # Initialize the result as an empty string
        result = ""
        
        # Pointers for the two strings
        i, j = len(a) - 1, len(b) - 1
        
        # Initialize carry to 0
        carry = 0
        
        # Loop through both strings from the end to the beginning
        while i >= 0 or j >= 0 or carry:
            # Sum the carry and the current digits
            sum = carry
            if i >= 0:
                sum += int(a[i])
                i -= 1
            if j >= 0:
                sum += int(b[j])
                j -= 1
            
            # Compute the current digit and the new carry
            result = str(sum % 2) + result
            carry = sum // 2
        
        return result

sol = Solution()
a = "1010"
b = "1011"
print(sol.addBinary(a, b))  # Output: "10101"
