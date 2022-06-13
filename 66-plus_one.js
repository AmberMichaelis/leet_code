/* You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
 * The digits are ordered from most significant to least significant in left-to-right order. 
 * The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 *
 * Example 1:
 * Input: digits = [1,2,3]
 * Output: [1,2,4] 
 *
 * Example 2:
 * Input: digits = [4,3,2,1]
 * Output: [4,3,2,2]
 * 
 * Example 3:
 * Input: digits = [9]
 * Output: [1,0]
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let lastDigitIndex = digits.length - 1
    if (digits[lastDigitIndex] !== 9) {
        digits[lastDigitIndex]++
    } else {
        while (digits[lastDigitIndex] === 9) {
            digits[lastDigitIndex] = 0
            lastDigitIndex--
            if (digits[lastDigitIndex] !== 9) {
                if (lastDigitIndex === -1) {
                    digits.unshift(1)
                } else {
                    let increment = digits[lastDigitIndex] + 1
                    digits[lastDigitIndex] = increment
                    break;
                }
            }
        }
    }
    return digits
};

console.log(plusOne([1, 2, 3])) // [1,2,4]
console.log(plusOne([4, 3, 2, 1])) // [4,3,2,2]
console.log(plusOne([9])) // [1,0]
console.log(plusOne([3, 9, 9, 9])) // [4,0,0,0]
console.log(plusOne([8, 9, 9, 9])) // [9,0,0,0]
console.log(plusOne([9, 9, 9])) // [1,0,0,0]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])) // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
