/* The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
 * (you may want to display this pattern in a fixed font for better legibility)
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 * string convert(string s, int numRows);
 *  
 * Example 1:
 * 
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * 
 * Example 2:
 * 
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * 
 * Example 3:
 * 
 * Input: s = "A", numRows = 1
 * Output: "A"
 *  
 * Constraints:
 * 
 * 1 <= s.length <= 1000
 * s consists of English letters (lower-case and upper-case), ',' and '.'.
 * 1 <= numRows <= 1000
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function (inputString, targetRows) {
    if (targetRows == 1) {
        return inputString;
    }

    // Start the process on row 1, heading down
    let currentRow = 1;
    let headingDown = true;

    // Initialise an array to store the zigzag data
    let zigZagArray = [];

    // Loop through the requested number of rows
    for (let i = 0; i < targetRows; i++) {
        // Initialise each zigzag row as an empty array
        zigZagArray[i] = [];
    }

    // Loop through the string
    for (let i = 0; i < inputString.length; i++) {
        // Add the current letter to the current row
        zigZagArray[currentRow - 1].push(inputString[i]);

        if (headingDown) {
            currentRow++;

            // Check if we've exceeded the maximum number of rows
            if (currentRow > targetRows) {
                // Start heading back up again
                currentRow = targetRows - 1;
                headingDown = false;
            }
        } else {
            currentRow--;

            // Check if we've exceeded the top row
            if (currentRow < 1) {
                // Start heading down again
                currentRow = 2;
                headingDown = true;
            }
        }
    }

    // Initialise a return string
    let totalString = '';

    // Loop through the constructed rows
    for (let i = 0; i < targetRows; i++) {
        // Append the row's characters joined together
        totalString += zigZagArray[i].join('');
    }

    return totalString;
};

/* Explanation:
 * https://duncan-mcardle.medium.com/leetcode-problem-6-zigzag-conversion-javascript-507d812a0620
 */
