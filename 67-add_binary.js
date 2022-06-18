/* Given two binary strings a and b, return their sum as a binary string.
 *
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let lenA = a.length;
    let lenB = b.length;
    let max = Math.max(lenA, lenB);
    let result = '';
    let remainder = 0;
    let value = 0;

    for (let i = 0; i < max; i++) {
        // adds binary digits starting with last place value, also adds one if there is a remainder
        value = Number(a[lenA - 1 - i] || 0) + Number(b[lenB - 1 - i] || 0) + remainder;
        // rounds to 1 if you have a remainder, rounds to 0 if you don't have a remainder
        remainder = Math.floor(value / 2);
        result = (value % 2) + result;
    }

    if (remainder) result = 1 + result;

    return result;
};

console.log(addBinary("11", "1")) // 100
console.log(addBinary("1010", "1011")) // 10101
console.log(addBinary("0", "0")) // 0
console.log(addBinary("1", "1")) // 10
console.log(addBinary("10101010", "11001100")) // 101110110
console.log(addBinary(
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
    )) // 110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000




// var addBinary = function(a, b) {
//     if (a === "0" && b === "0" ) return "0";
//     // convert a to regular number
//     let exponent = 0;
//     let digit;
//     let valueOfA = 0;
//     for (let i = a.length - 1; i >= 0; i--) {
//         digit = a[i]
//         valueOfA += digit * 2 ** exponent;
//         exponent++
//     }

//     // convert b to regular number
//     exponent = 0;
//     let valueOfB = 0;
//     for (let i = b.length - 1; i >= 0; i--) {
//         digit = b[i]
//         valueOfB += digit * 2 ** exponent;
//         exponent++
//     }
//     // add a and b
//     let sum = Number(valueOfA) + Number(valueOfB);
//     console.log(`valueOfA: ${valueOfA}, valueOfB: ${valueOfB}, sum: ${sum}`)

//     // convert sum to binary
//     let array = [];
//     while (sum > 0) {
//             let remainder = sum % 2;
//             array.unshift(remainder);
//             sum = Math.floor(sum / 2);
//             console.log(sum)
//     }
//     return array.join('')
// };
