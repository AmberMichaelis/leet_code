/* You are given an m x n integer matrix matrix with the following two properties:
 * 
 * Each row is sorted in non-decreasing order.
 * The first integer of each row is greater than the last integer of the previous row.
 * Given an integer target, return true if target is in matrix or false otherwise.
 * 
 * You must write a solution in O(log(m * n)) time complexity.
 * 
 * Example 1:
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
 * Output: true
 * 
 * Example 2:
 * Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
 * Output: false
 * 
 * Constraints:
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 100
 * -10^4 <= matrix[i][j], target <= 10^4
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    var row = searchRow(matrix, target, 0, matrix.length - 1);
    return row === -1 ? false : searchArray(matrix[row], target, 0, matrix[row].length - 1);
};

var searchRow = function (matrix, target, top, bottom) {
    if (top > bottom) return -1;
    var mid = top + Math.floor((bottom - top) / 2);
    var len = matrix[mid].length;
    if (len === 0) return -1;
    if (matrix[mid][0] <= target && target <= matrix[mid][len - 1]) {
        return mid;
    } else if (target < matrix[mid][0]) {
        return searchRow(matrix, target, top, mid - 1);
    } else {
        return searchRow(matrix, target, mid + 1, bottom);
    }
};

var searchArray = function (arr, target, left, right) {
    if (left > right) return false;
    var mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) {
        return true;
    } else if (arr[mid] > target) {
        return searchArray(arr, target, left, mid - 1);
    } else {
        return searchArray(arr, target, mid + 1, right);
    }
};
