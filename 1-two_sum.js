var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let k = i; k < nums.length; k++) {
            if (nums[i] + nums[k] === target) {
                return [i, k]
            }
        }
    }
};

console.log(twoSum([1,2,4,5,8], 7))
