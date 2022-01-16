// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeElement = function (nums, val) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
    }

    return j;
};

console.log(removeElement([3,2,2,3], 3)) // Expected output = 2
console.log(removeElement([0,0,1,1,1,2,2,3,3,4], 1)) // Expected output = 7
console.log(removeElement([1], 1)) // Expected output = 0
console.log(removeElement([], 1)) // Expected output = 0
console.log(removeElement([2,2,2,2], 3)) // Expected output = 4


// A better answer that is not accepted by leetcode

// var removeElement = function (nums, val) {
//     nums = nums.filter((num) => num !== val);
//     return nums.length;
// };

