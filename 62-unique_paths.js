/* There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). 
 * The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). 
 * The robot can only move either down or right at any point in time.
 * 
 * Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
 * 
 * The test cases are generated so that the answer will be less than or equal to 2 * 10^9.
 * 
 * Example 1:
 * Input: m = 3, n = 7
 * Output: 28
 * 
 * Example 2:
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
 * 1. Right -> Down -> Down
 * 2. Down -> Down -> Right
 * 3. Down -> Right -> Down
 * 
 * Constraints:
 * 1 <= m, n <= 100
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const result = [[]];
    // Adding the first row of ’1’s to the array
    for (let i = 0; i < n; i += 1) {
        result[0].push(1);
    }
    // iterating over each of the rows
    for (let i = 1; i < m; i += 1) {
        result.push([1]);    // adding 1 to the first, left most square

        // Getting the total for the current square
        for (let j = 1; j < n; j += 1) {
            result[i][j] = result[i][j - 1] + result[i - 1][j];
        }
    }
    // Return the bottom right hand value that has the total.
    return result[m - 1][n - 1];
};
