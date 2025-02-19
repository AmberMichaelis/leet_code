def firstMissingPositive(nums):
    """
    This function finds the first missing positive integer in an unsorted list.
    It uses an in-place cyclic sort to achieve O(n) time complexity.
    """
    
    n = len(nums)
    
    # Step 1: Place each number in its correct position (nums[i] -> index nums[i] - 1)
    for i in range(n):
        while 1 <= nums[i] <= n and nums[i] != nums[nums[i] - 1]: 
            # Swap nums[i] with its correct position nums[nums[i] - 1]
            nums[nums[i] - 1], nums[i] = nums[i], nums[nums[i] - 1]

    # Step 2: Find the first missing positive number
    for i in range(n):
        if nums[i] != i + 1:
            return i + 1  # First missing positive integer
    
    # Step 3: If all numbers are in place, return n + 1
    return n + 1
