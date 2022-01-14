// Do not create a new array
// Final array must be the same length (k) as original array
// Answer should be a single number equal to the length of unique elements

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeDuplicates = function (nums) {
    if (nums.length === 0 ) return 0;
    let i = 0;
    let j = 1;
    while (j < nums.length) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
            j++;
        } else j++;
    }
    return nums;
};

console.log(removeDuplicates([1,1,2]), 'answer');
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 'answer');
