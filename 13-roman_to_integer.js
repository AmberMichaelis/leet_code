/* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 *Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * I can be placed before V (5) and X (10) to make 4 and 9. 
 * X can be placed before L (50) and C (100) to make 40 and 90. 
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * 
 * Given a roman numeral, convert it to an integer.
 * 
 * Example 1:
 * Input: s = "III"
 * Output: 3
 * Explanation: III = 3.
 * 
 * Example 2:
 * Input: s = "LVIII"
 * Output: 58
 * Explanation: L = 50, V= 5, III = 3.
 * 
 * Example 3:
 * Input: s = "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 * 
 * Constraints:
 * 1 <= s.length <= 1
 * s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')
 * It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 */

/**
* @param {string} s
* @return {number}
*/

const romanLetters = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}

var romanToInt = function (s) {
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        let currentLetter = s[i]
        let nextLetter = s[i + 1]
        let currentValue = romanLetters[currentLetter]
        let nextValue = romanLetters[nextLetter]
        if (currentValue !== undefined) {
            if (currentValue >= nextValue || nextValue === undefined) {
                sum += currentValue;
            } else {
                sum -= currentValue;
            }
        }
    }
    return sum;
}

/* Explanation:
 * Create an object with the roman numeral letters and their values.
 * Loop through string s and make variables for the current letter, its value, the next letter, and its value.
 * Make sure the current value exists in the romanLetters object.
 * Compare the current value with the next value. 
 * If the current value is greater than or equal to the next value, or the next value is undefinded (because you're at the end of s), 
 * add the value to sum.
 * Otherwise, subtract the value from sum.
 * After looping through all of s, return the sum.
 */
