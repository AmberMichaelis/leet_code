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

var lengthOfLastWord = function (s) {
    array = s.split(" ")
    lastWord = array[array.length - 1]
    if (lastWord.length === 0) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i].length !== 0) {
            lastWord = array[i];
            break;
            }
        }
    }
    return lastWord.length
};

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
console.log(lengthOfLastWord(" ")); // 0
