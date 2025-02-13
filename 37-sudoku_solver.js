var solveSudoku = function(board) {
    solve(board); // Call the recursive solver function
};

// Recursive function to solve the board
function solve(board) {
    // Loop through each cell in the 9x9 board
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            // Find an empty cell (denoted by ".")
            if (board[row][col] === ".") {
                // Try placing numbers "1" to "9"
                for (let num = "1"; num <= "9"; num++) {
                    // Check if placing 'num' is valid
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num; // Place the number

                        // Recursively try solving the rest of the board
                        if (solve(board)) return true;

                        // If placing 'num' doesn't lead to a solution, backtrack
                        board[row][col] = "."; // Reset cell to empty
                    }
                }
                // If no number can be placed, return false to backtrack
                return false;
            }
        }
    }
    // If no empty cells remain, the board is solved
    return true;
}

// Function to check if placing 'num' in board[row][col] is valid
function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
        // Check if 'num' already exists in the same row
        if (board[row][i] === num) return false;

        // Check if 'num' already exists in the same column
        if (board[i][col] === num) return false;

        // Calculate the starting index of the 3x3 sub-box
        let boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        let boxCol = 3 * Math.floor(col / 3) + (i % 3);

        // Check if 'num' exists in the corresponding 3x3 box
        if (board[boxRow][boxCol] === num) return false;
    }
    // If no conflicts are found, the number is valid
    return true;
}
