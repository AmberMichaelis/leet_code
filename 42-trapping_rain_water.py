def trap(height):
    """
    Computes the total amount of trapped rainwater given elevation heights.
    :param height: List[int] - List of non-negative integers representing elevation heights.
    :return: int - Total units of trapped rainwater.
    """
    if not height or len(height) < 3:
        return 0  # If there are less than 3 bars, no water can be trapped.
    
    n = len(height)
    left_max = [0] * n  # Array to store maximum height to the left of each index.
    right_max = [0] * n  # Array to store maximum height to the right of each index.
    
    # Fill left_max array
    left_max[0] = height[0]
    for i in range(1, n):
        left_max[i] = max(left_max[i - 1], height[i])
    
    # Fill right_max array
    right_max[n - 1] = height[n - 1]
    for i in range(n - 2, -1, -1):
        right_max[i] = max(right_max[i + 1], height[i])
    
    # Calculate trapped water
    total_water = 0
    for i in range(n):
        total_water += min(left_max[i], right_max[i]) - height[i]
    
    return total_water
