/* Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).

Example 1:
Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:
Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:
Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
 
Constraints:
-100.0 < x < 100.0
-231 <= n <= 231-1
n is an integer.
-10^4 <= xn <= 10^4
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1;
    if (n > 0) return pow(x, n);
    if (n < 0) return 1 / pow(x, -n);
};

var pow = function (x, n) {
    if (n === 1) return x;
    var num = pow(x, Math.floor(n / 2));
    if (n % 2 === 0) {
        return num * num;
    } else {
        return x * num * num;
    }
};
