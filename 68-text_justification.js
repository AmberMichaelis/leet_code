/**
 * LeetCode #68: Text Justification
 *
 * Given an array of words and a maximum line width, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
 * Extra spaces are distributed as evenly as possible between words. The last line is left-justified and no extra space is inserted between words.
 *
 * @param {string[]} words - Array of words.
 * @param {number} maxWidth - The maximum width of a line.
 * @return {string[]} - An array of justified lines.
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
    let index = 0;

    // Process all words
    while (index < words.length) {
        let totalChars = words[index].length;
        let last = index + 1;
        
        // Determine how many words fit in the current line.
        while (last < words.length) {
            // If adding the next word plus at least one space exceeds maxWidth, break.
            if (totalChars + 1 + words[last].length > maxWidth) break;
            totalChars += 1 + words[last].length;
            last++;
        }

        let line = "";
        let numWordsInLine = last - index;
        
        // If we're on the last line or the line contains only one word, left-justify.
        if (last === words.length || numWordsInLine === 1) {
            // Join the words with a single space.
            line = words.slice(index, last).join(" ");
            // Add extra spaces at the end if needed.
            line += " ".repeat(maxWidth - line.length);
        } else {
            // Calculate the total number of spaces to distribute.
            let totalSpaces = maxWidth - (totalChars - (numWordsInLine - 1));
            // Calculate the minimum number of spaces to put between each word.
            let spaceBetweenWords = Math.floor(totalSpaces / (numWordsInLine - 1));
            // Calculate the extra spaces that need to be distributed to the left slots.
            let extraSpaces = totalSpaces % (numWordsInLine - 1);
            
            for (let i = index; i < last - 1; i++) {
                line += words[i];
                // If extraSpaces is still available, add one additional space.
                line += " ".repeat(spaceBetweenWords + (i - index < extraSpaces ? 1 : 0));
            }
            // Append the last word in the line.
            line += words[last - 1];
        }
        
        result.push(line);
        index = last;
    }
    
    return result;
};

// Example usage:
// const words = ["This", "is", "an", "example", "of", "text", "justification."];
// const maxWidth = 16;
// console.log(fullJustify(words, maxWidth));
