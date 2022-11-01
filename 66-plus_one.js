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
 * 
 * Constraints:
 * 1 <= digits.length <= 100
 * 0 <= digits[i] <= 9
 * digits does not contain any leading 0's.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let index = digits.length - 1
    if (digits[index] !== 9) {
        digits[index]++
    } else {
        while (digits[index] === 9) {
            digits[index] = 0
            index--
            if (digits[index] !== 9) {
                if (index === -1) {
                    digits.unshift(1)
                } else {
                    digits[index]++
                    break;
                }
            }
        }
    }
    return digits
};

/* Explanation:
 * Create a variable that points to the last digit.
 * Check if the last digit does not equal 9.
 * If so, add 1 to that digit and return digits.
 * Otherwise, loop through all the digits backwards as long as the current digit equals 9.
 * Set each digit equal to 0.
 * Decrement the pointer to the previous digit.
 * Check if that digit does not equal 9.
 * If so, check if the pointer equals -1.
 * If so, insert a 1 at the beginning of the digits array and return digits.
 * Otherwise, increment the digit and return digits.
 */
