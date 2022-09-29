/* Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
 * 
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * 
 * Example 1:
 * Input: x = 123
 * Output: 321
 * 
 * Example 2:
 * Input: x = -123
 * Output: -321
 * 
 * Example 3:
 * Input: x = 120
 * Output: 21
 *  
 * 
 * Constraints:
 * -2^31 <= x <= 2^31 - 1
 */

/**
 * @param {number} x
 * @return {number}
 */
 const reverse = n => {
    const str = "" + Math.abs(n);      // convert absolute value to string
    const reversed = str.split("")     // get array of digit characters
                        .reverse()     // reverse it
                        .join("");     // join into string again;
    const num = +reversed;             // convert integer
    if (num < Math.pow(-2, 31) ||      // check for 32-bit integer
        num > Math.pow(2, 31) - 1) 
        return 0;
    return (n < 0 ? -1 : 1) * num;     // multiple by -1 if needed
  }
