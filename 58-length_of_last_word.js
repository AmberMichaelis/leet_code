/* Given a string s consisting of words and spaces, return the length of the last word in the string.
 *
 * Example 1:
 * Input: s = "Hello World"
 * Output: 5
 * Explanation: The last word is "World" with length 5.
 * 
 * Example 2:
 * Input: s = "   fly me   to   the moon  "
 * Output: 4
 * Explanation: The last word is "moon" with length 4.
 * 
 * Example 3:
 * Input: s = "luffy is still joyboy"
 * Output: 6
 * Explanation: The last word is "joyboy" with length 6.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let trimmed = s.trim();
    if (trimmed.length === 0) return 0;
    for (let i = trimmed.length - 1; i >= 0; i--) {
        if (trimmed[i] === " ") return trimmed.length - 1 - i;
    }
    return trimmed.length;
}

/* Explanation:
 * Create a variable with the trimmed string called trimmed.
 * Check if the length of trimmed is 0.
 * If so, return 0
 * Loop backwards through the characters of trimmed.
 * Check if any character is equal to a space.
 * If so, return the distance between the space and the end of the string.
 * After looping through all of trimmed, return the length of trimmed.
 */
