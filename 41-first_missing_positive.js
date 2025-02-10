var firstMissingPositive = function (nums) {
    let n = nums.length;

    // Step 1: Place each number in its correct position (i.e., nums[i] should be i + 1)
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // Swap nums[i] with nums[nums[i] - 1]
            let temp = nums[i];
            nums[i] = nums[temp - 1];
            nums[temp - 1] = temp;
        }
    }

    // Step 2: Identify the first missing positive number
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // If all numbers are in their correct positions, return n + 1
    return n + 1;
};

// Example usage:
console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
console.log(firstMissingPositive([1, 2, 0])); // Output: 3
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // Output: 1
