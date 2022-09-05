/* Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 *
 *         1
 *       1   1
 *     1   2   1
 *   1   3   3   1
 * 1   4   6   4   1
 *
 * Example 1:
 * Input: rowIndex = 3
 * Output: [1,3,3,1]
 * 
 * Example 2:
 * Input: rowIndex = 0
 * Output: [1]
 * 
 * Example 3:
 * Input: rowIndex = 1
 * Output: [1,1]
 * 
 * Constraints:
 * 0 <= rowIndex <= 33
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let triangle = [];

    for (let eachRow = 1; eachRow <= rowIndex + 1; eachRow++) {
        let row = [];
        let value = 1;

        for (let valueIndex = 1; valueIndex <= eachRow; valueIndex++) {
            row.push(value);
            value = value * (eachRow - valueIndex) / valueIndex;
        }

        triangle.push(row);
    }

    return triangle[rowIndex];
};


console.log(getRow(3)); // [1,3,3,1]
console.log(getRow(0)); // [1]
console.log(getRow(1)); // [1,1]


/* This is a second way to do it:
 * 
 * var getRow = function (rowIndex) {
 * 
 *     let values = []
 * 
 *     for (let n = 0; n <= rowIndex; n++) {
 *         values[n] = [];
 *         values[n][0] = 1;
 *         for (let k = 1; k < n; k++) {
 *             values[n][k] = values[n - 1][k - 1] + values[n - 1][k]
 *         }
 *         values[n][n] = 1;
 *     }
 * 
 *     return values[rowIndex];
 * };
 */
