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

const romanLetters = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
const romanValues = [1, 5, 10, 50, 100, 500, 1000]


var romanToInt = function (s) {
    var number = 0
    var array = s.split('');
    var newArray = []
        
        // converts s into array with values equivalent to roman numeral values
        for (let index in array)   {
            for (let each in romanLetters) {
                if (array[index] === romanLetters[each]) {
                    newArray.push(romanValues[each])
                }
            }
        }


        for (let i = 0; i < newArray.length; i++) {
            let currentLetter = newArray[i];
            let nextLetter = newArray[i + 1];
            
            if (currentLetter >= nextLetter || nextLetter == undefined) {
                number += currentLetter
            } else {
                number -= currentLetter
            }
        }
        return number
};

console.log(romanToInt('LVIIIX'))
console.log(romanToInt("I"))
console.log(romanToInt("IV"))
console.log(romanToInt("IX"))
console.log(romanToInt("X"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCI"))
