/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
 * typically using all the original letters exactly once.
 * 
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 * 
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 * 
 * Constraints:
 * 1 <= strs.length <= 104
 * 0 <= strs[i].length <= 100
 * strs[i] consists of lowercase English letters.
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    let result = {};
    for (let word of strs) {
        let cleansed = word.split("").sort().join("");
        if (result[cleansed]) {
            result[cleansed].push(word);
        } else {
            result[cleansed] = [word];
        }
    }
    return Object.values(result);
}

/* Explanation:
 * https://646634.medium.com/grouping-anagrams-together-in-javascript-4da359d6bb98
 */
