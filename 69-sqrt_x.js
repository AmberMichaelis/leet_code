/* Given a non-negative integer x, compute and return the square root of x.
 * Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
 *
 * Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
 * 
 * Example 1:
 * Input: x = 4
 * Output: 2
 * 
 * Example 2:
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 * 
 * Constraints:
 * 0 <= x <= 231 - 1
 */

/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function (x) {
//     let sqrt;
//     let digits;
//     if (x % 2 === 0) {
//         digits = x[0]
//     }
//     console.log(digits)
//     let basicRoots = {
//         1: 1,
//         2: 4,
//         3: 9,
//         4: 16,
//         5: 25,
//         6: 36,
//         7: 49,
//         8: 64,
//         9: 81,
//         10:100
//     }
//     for (let key in basicRoots) {
//         if ( x === basicRoots[key] ) {
//             sqrt = key;
//         }
//     }
//     return sqrt;
// };

// console.log(mySqrt(4));
// console.log(mySqrt(8));


var mySqrt = function (x) {
    let left = 1;
    let right = x;
    // The square root of 0 or 1 is itself
    if (x < 2) return x;

    // Use binary search to find the square root or the whole number closest to the square root
    while (left < right) {
        // Find the mid point between left and right
        const mid = Math.floor((left + right) / 2)
        // Return the mid point if this is the square root
        if (mid * mid === x) return mid
        // If mid squared is greater than x then the answer must be on the left half of mid
        else if (mid * mid > x) right = mid
        // If mid squred is less than x then the answer must be on the right half of mid
        else left = mid + 1
    }
    return left - 1
};

console.log(mySqrt(0));
console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(12321));
