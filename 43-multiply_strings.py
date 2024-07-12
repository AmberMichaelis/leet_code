class Solution:
    def multiply(self, num1: str, num2: str) -> str:
        # If either number is "0", the result is "0"
        if num1 == "0" or num2 == "0":
            return "0"
        
        # Initialize a result list to store intermediate results
        result = [0] * (len(num1) + len(num2))
        
        # Reverse both strings to make it easier to multiply from least significant digit
        num1 = num1[::-1]
        num2 = num2[::-1]
        
        # Perform multiplication digit by digit
        for i in range(len(num1)):
            for j in range(len(num2)):
                product = int(num1[i]) * int(num2[j])
                result[i + j] += product
                # Carry the value to the next position
                result[i + j + 1] += result[i + j] // 10
                result[i + j] %= 10
        
        # Convert result list to string and strip leading zeros
        result = result[::-1]
        result_str = ''.join(map(str, result))
        
        return result_str.lstrip('0')

# Example usage:
solution = Solution()
print(solution.multiply("123", "456"))  # Output: "56088"
