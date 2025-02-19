/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (!height || height.length === 0) return 0; // Edge case: empty or null array

    let left = 0, right = height.length - 1; // Pointers to traverse the height array
    let leftMax = 0, rightMax = 0; // Track the maximum height from left and right
    let trappedWater = 0; // Store total trapped water

    while (left < right) {
        if (height[left] < height[right]) {
            // Process the left side
            if (height[left] >= leftMax) {
                leftMax = height[left]; // Update left max
            } else {
                trappedWater += leftMax - height[left]; // Water trapped at this index
            }
            left++; // Move left pointer
        } else {
            // Process the right side
            if (height[right] >= rightMax) {
                rightMax = height[right]; // Update right max
            } else {
                trappedWater += rightMax - height[right]; // Water trapped at this index
            }
            right--; // Move right pointer
        }
    }

    return trappedWater;
};

// Example usage:
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
