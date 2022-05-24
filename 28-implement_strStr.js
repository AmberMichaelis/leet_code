/* Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of 
 * haystack.
 * 
 * Example 1:
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 * 
 * Example 2:
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length === 0) {
        return 0
    } else {
        // Loop through haystack letters
        for (let i = 0; i <= haystack.length - needle.length; i++) {
            // Check if current letter matches first needle letter
            if (haystack[i] === needle[0]) {
                // Loop through the needle
                for (let j = 0; ; j++) {
                    // Reached the end of the need, thus needle was found fully
                    if (j === needle.length) {
                        return i;
                    }
                    // Needle letters not found at i
                    else if (haystack[i + j] !== needle[j]) {
                        break;
                    }
                }
            }
        }
    }
    return -1;
};

console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("aaa", "aaaa"));
