/* Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: strs = ["flower","flow","flight"
 * Output: "fl"
 * 
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * Constraints:
 * 1 <= strs.length <= 20
 * 0 <= strs[i].length <= 20
 * strs[i] consists of only lowercase English letters.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs.join('');

    let prefix = []
    for (let index = 0; index < strs.length; index++) {
        let currentWord = strs[index];
        if (index === 0) {
            prefix = currentWord.split('');
        } else {
            prefix = prefix.slice(0, currentWord.length);
            for (let char = 0; char < currentWord.length; char++) {
                if (currentWord[char] !== prefix[char]) {
                    prefix = prefix.slice(0, char);
                    break;
                }
            }
        }
    }
    return prefix.join('');
};

/* Explanation:
 * If there is only one word in strs, return it as a string.
 * Create an empty array variable called prefix.
 * Loop through all the words in strs.
 * Create a variable for the current word.
 * If it's the first word in strs, split the letters into the prefix array.
 * Otherwise, shorten prefix array to be the same length as the current word.
 * Loop through each of the letters in the current word.
 * When the letter in the current word doesn't match the letter in the prefix array,
 * remove the extra letters in the previous array, and break out of the loop to move to the next word.
 * After looping through all of the words in strs, return prefix as a string.
 */
