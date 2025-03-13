/**
 * Solves the N-Queens II problem by counting the number of valid placements.
 * @param {number} n - The size of the chessboard (n x n).
 * @return {number} - The number of valid ways to place N queens.
 */
var totalNQueens = function(n) {
    let count = 0; // Stores the total number of valid solutions
    
    // Sets to track columns and diagonals under attack
    let cols = new Set();         // Tracks occupied columns
    let mainDiag = new Set();      // Tracks main diagonals (row - col)
    let antiDiag = new Set();      // Tracks anti-diagonals (row + col)

    /**
     * Backtracking function to place queens row by row
     * @param {number} row - The current row being considered.
     */
    function backtrack(row) {
        if (row === n) {
            // If we reach row 'n', we have successfully placed all queens
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            // Check if the current column or diagonals are under attack
            if (cols.has(col) || mainDiag.has(row - col) || antiDiag.has(row + col)) {
                continue; // Skip this position if it's not safe
            }

            // Place the queen
            cols.add(col);
            mainDiag.add(row - col);
            antiDiag.add(row + col);

            // Recurse to the next row
            backtrack(row + 1);

            // Remove the queen (backtrack)
            cols.delete(col);
            mainDiag.delete(row - col);
            antiDiag.delete(row + col);
        }
    }

    // Start backtracking from the first row
    backtrack(0);
    
    return count; // Return the total number of solutions
};

// Example Usage
console.log(totalNQueens(4)); // Output: 2
console.log(totalNQueens(8)); // Output: 92
