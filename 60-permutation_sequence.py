from math import factorial

def getPermutation(n: int, k: int) -> str:
    # Create a list of numbers from 1 to n
    numbers = list(range(1, n + 1))
    
    # Convert k to zero-based index
    k -= 1
    result = []
    
    # Iterate to build the k-th permutation
    for i in range(n, 0, -1):
        # Determine the index of the current number
        index = k // factorial(i - 1)
        
        # Append the selected number to the result
        result.append(str(numbers[index]))
        
        # Remove the used number from the list
        numbers.pop(index)
        
        # Update k for the next selection
        k %= factorial(i - 1)
    
    return "".join(result)

# Example usage
print(getPermutation(3, 3))  # Output: "213"
print(getPermutation(4, 9))  # Output: "2314"
