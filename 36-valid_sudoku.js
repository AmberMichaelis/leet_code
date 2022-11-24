/* Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 * 
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * Note:
 * 
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 *  
 * 
 * Example 1:
 * Input: board = 
 * [["5","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,[".","9","8",".",".",".",".","6","."]
 * ,["8",".",".",".","6",".",".",".","3"]
 * ,["4",".",".","8",".","3",".",".","1"]
 * ,["7",".",".",".","2",".",".",".","6"]
 * ,[".","6",".",".",".",".","2","8","."]
 * ,[".",".",".","4","1","9",".",".","5"]
 * ,[".",".",".",".","8",".",".","7","9"]]
 * Output: true
 * 
 * Example 2:
 * Input: board = 
 * [["8","3",".",".","7",".",".",".","."]
 * ,["6",".",".","1","9","5",".",".","."]
 * ,[".","9","8",".",".",".",".","6","."]
 * ,["8",".",".",".","6",".",".",".","3"]
 * ,["4",".",".","8",".","3",".",".","1"]
 * ,["7",".",".",".","2",".",".",".","6"]
 * ,[".","6",".",".",".",".","2","8","."]
 * ,[".",".",".","4","1","9",".",".","5"]
 * ,[".",".",".",".","8",".",".","7","9"]]
 * Output: false
 * Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. 
 * Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 *  
 * Constraints:
 * board.length == 9
 * board[i].length == 9
 * board[i][j] is a digit 1-9 or '.'
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const validate = (array) => {
    // filter out empty spaces
    const digits = array.filter((character) => character !== '.');
    return digits.length === [...new Set(digits)].length;
};

var isValidSudoku = function (board) {
    const [validated, grids] = [[], []];

    board.forEach((row, rowIndex) => {
        // rows
        validated.push(validate(row));

        // columns
        const column = [];
        for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {
            column.push(board[columnIndex][rowIndex]);
        }
        validated.push(validate(column));

        //grids
        grids.push([]);
    });

    //grids
    board.forEach((row, rowIndex) => {
        row.forEach((character, charIndex) => {
            let gridRow = 0;
            if (rowIndex >= 3 && rowIndex <= 5) {
                gridRow = 1;
            } else if (rowIndex >= 6 && rowIndex <= 8) {
                gridRow = 2;
            }

            if (charIndex >= 3 && charIndex <= 5) {
                gridRow += 3;
            } else if (charIndex >= 6 && charIndex <= 8) {
                gridRow += 6;
            }

            grids[gridRow].push(character);
        });
    });

    grids.forEach((grid) => {
        validated.push(validate(grid));
    });

    return validated.every((value) => value === true);
};

console.log(
    isValidSudoku([
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ])
);

/* Explanation:
 * https://javascript.plainenglish.io/how-to-validate-a-sudoku-board-a-deep-dive-72d94d292cb3
 */
