/* Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:
 * 
 * '.' Matches any single character.​​​​
 * '*' Matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 * 
 *  
 * 
 * Example 1:
 * 
 * Input: s = "aa", p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 * Example 2:
 * 
 * Input: s = "aa", p = "a*"
 * Output: true
 * Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
 * Example 3:
 * 
 * Input: s = "ab", p = ".*"
 * Output: true
 * Explanation: ".*" means "zero or more (*) of any character (.)".
 *  
 * 
 * Constraints:
 * 
 * 1 <= s.length <= 20
 * 1 <= p.length <= 20
 * s contains only lowercase English letters.
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(str, pat) {
    return recursiveIsMatch(0, 0, str, pat);
}
function recursiveIsMatch(i, j, str, pat) {
    const inputStringLength = str.length;
    const patternLength = pat.length;

    // Reached the end of the pattern
    if (j == patternLength) {
        // Return whether or not we've also reached the end of the string (entire string has passed)
        return i == inputStringLength;
    }

    // If the current pattern character is followed by a * (is a wildcard)
    if (j + 1 < patternLength && pat.charAt(j + 1) == '*') {
        // Assume 0 matches of the current pattern character, move on to the next point in the pattern (after the asterisk)
        if (recursiveIsMatch(i, j + 2, str, pat)) return true;

        // Loop through the remaining characters, so long as they match by character (or .)
        while (
            i < inputStringLength &&
            (pat.charAt(j) == '.' || str.charAt(i) == pat.charAt(j))
        ) {
            // Check the rest of the string (1 character forward), against the next point in the pattern (after the asterisk)
            if (recursiveIsMatch(++i, j + 2, str, pat)) return true;
        }
    }
    // If the current pattern character is not a wildcard, and matches the current string character
    else if (
        i < inputStringLength &&
        (pat.charAt(j) == '.' || str.charAt(i) == pat.charAt(j))
    ) {
        // Move onto the next character, and the next character of the pattern
        return recursiveIsMatch(i + 1, j + 1, str, pat);
    }

    // String does not match current point in pattern
    return false;
}
