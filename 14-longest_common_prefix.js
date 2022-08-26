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
    let prefix = []

    if (strs.length === 1) return strs.join('');

    for (let i = 0; i < strs.length; i++) {
        let firstWord = strs[i];
        if (i === 0) {
            prefix = firstWord.split('');
        } else {
            prefix = prefix.slice(0, firstWord.length);
            for (let char = 0; char < firstWord.length; char++) {
                if (firstWord[char] !== prefix[char]) {
                    prefix = prefix.slice(0, char);
                }
            }
        }
    }
    return prefix.join('');
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["amber", "ambergi", "amberger"]));
console.log(longestCommonPrefix(["marcin"]));
console.log(longestCommonPrefix(["a", "a", "b"]));
console.log(longestCommonPrefix(["abab", "aba", ""]));
console.log(longestCommonPrefix(["abab", "aba", "abc"]));
