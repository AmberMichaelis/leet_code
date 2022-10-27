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
 * 0 <= x <= 2^31 - 1
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x;
    let lower = 1;
    let higher = x;

    while (lower < higher) {
        const mid = Math.floor((lower + higher) / 2);
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid > x) {
            higher = mid;
        } else {
            lower = mid + 1;
        }
    }
    return lower - 1;
};

/* Explanation:
 * Check if x is less than 2.
 * If so, return x.
 * Create a variable equal to 1, lower.
 * Create a variable equal to x, higher.
 * Create loop while lower is less than higher.
 * Create a variable, mid, that adds lower + higher, divides by 2, then rounds down.
 * Check if mid * mid equals x.
 * If so, return mid.
 * Check if mid * mid is greater than x.
 * If so, set higher equal to mid and repeat while loop.
 * Otherwise, set lower equal to mid + 1 and repeat while loop.
 * Once lower is greater than or equal to higher, return lower - 1.
 */
