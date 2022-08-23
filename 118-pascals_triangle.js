/* Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 *
 *         1
 *       1   1
 *     1   2   1
 *   1   3   3   1
 * 1   4   6   4   1
 * 
 * Example 1:
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * 
 * Example 2:
 * Input: numRows = 1
 * Output: [[1]]
 * 
 * Constraints:
 * 1 <= numRows <= 30
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let triangle = [];

    for(let rowIndex = 1; rowIndex <= numRows; rowIndex++){
        let row = [];
        let value = 1;

        for(let valueIndex = 1; valueIndex <= rowIndex; valueIndex++){
            row.push(value);
            value = value * (rowIndex - valueIndex) / valueIndex;
        }

        triangle.push(row);
    }

    return triangle;
};

console.log(generate(5)); // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)); // [[1]]
